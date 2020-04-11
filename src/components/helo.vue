<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px" label-position="top">
      <el-form-item label="Content Analysis">
        <div class="row d-flex">
          <div class="col-md-4">
            <div>
              <el-checkbox
                label="Bug Report"
                v-model="form.type.bugReport"
              ></el-checkbox>
            </div>
            <div>
              <el-checkbox
                label="Support Request"
                v-model="form.type.supportRequest"
              ></el-checkbox>
            </div>
            <div>
              <el-checkbox
                label="Feature Request"
                v-model="form.type.featureRequest"
              ></el-checkbox>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <el-checkbox
                label="Feature Shortcoming"
                v-model="form.type.featureShortcoming"
              ></el-checkbox>
            </div>
            <div>
              <el-checkbox
                label="General Complaint"
                v-model="form.type.generalComplaint"
              ></el-checkbox>
            </div>
            <div>
              <el-checkbox
                label="General Praise"
                v-model="form.type.generalPraise"
              ></el-checkbox>
            </div>
          </div>

          <div class="col-md-4">
            <div>
              <el-checkbox
                label="Noise"
                v-model="form.type.noise"
              ></el-checkbox>
            </div>
            <div>
              <el-checkbox
                label="other"
                v-model="form.type.other"
              ></el-checkbox>
              <el-input
                placeholder="Add Name"
                v-if="form.type.other"
                type="text"
                size="small"
                v-model="form.type.otherName"
              />
            </div>
          </div>
        </div>
      </el-form-item>
      <hr />
      <el-form-item label="Sentiment Analysis" prop="resource">
        <el-radio-group v-model="form.resource">
          <el-radio label="Very Negative"></el-radio>
          <el-radio label="Negative"></el-radio>
          <el-radio label="Neutral"></el-radio>
          <el-radio label="Positive"></el-radio>
          <el-radio label="Very Positive"></el-radio>
        </el-radio-group>
      </el-form-item>
      <hr />
      <el-form-item label="Gender" prop="gender">
        <div class="">Original Name: xxxx</div>
        <div class="">Formated Name: xxxx</div>
        <el-radio-group v-model="form.gender">
          <el-radio label="male"></el-radio>
          <el-radio label="female"></el-radio>
          <el-radio label="UnKnown"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-button @click="handleGender" primary size="mini" plain>
        Detect Gender</el-button
      >
      <el-button @click="handleGender2" primary size="mini" plain>
        Detect Genderioz.io</el-button
      >

      <el-form-item class="pt-4">
        <el-button type="primary" @click="onSubmit()">Submit</el-button>
        <el-button type="primary" @click="onNext()">Next</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
import auth from "../services/authService";

export default {
  props: ["tweet"],
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: {
          bugReport: false,
          supportRequest: false,
          featureRequest: false,
          featureShortcoming: false,
          generalComplaint: false,
          generalPraise: false,
          noise: false,
          other: false,
          otherName: "",
          veryNegative: false,
          negative: false,
          neutral: false,
          positive: false,
          veryPositive: false
        },
        resource: "",
        gender: "",
        desc: ""
      }
    };
  },
  mounted() {
    console.log(this.tweet.annotations);
    this.form = this.tweet.annotations;
    //Object.assign(this.form,this.tweet.annotations);
  },
  methods: {
    // getFisrtName() {
    //   const name = this.tweet.user.name.split(" ");
    //   return name[0];
    // },
    handleGender() {
      try {
        var GenderApi = require("gender-api.com-client");
        var genderApiClient = new GenderApi.Client("XhcpKpNHWAPwSrFUlH");

        genderApiClient.getByFirstName(this.formatName(), response => {
          console.log(response.gender); //female
          console.log(response.accuracy); //98

          this.form.gender = response.gender;
        });
      } catch (e) {
        console.log("Error:", e);
      }
    },

    handleGender2() {
      console.log(this.formatName());

      var genderize = require("genderize");

      genderize(this.formatName(), function(err, obj) {
        console.log(obj.gender);
        this.form.gender = response.gender; // outputs 'female'
      });
      // generators
      //let gender = yield detect('vadim'); // 'male'
    },

    formatName() {
      let name = this.tweet.user.name;

      name = this.convert_accented_characters(name);
      name = this.normalizeFonts(name);
      name = this.replaceSymbols(name);
      name = this.removeEmojis(name);

      if (name.match(/\./g) && name.match(/\./g).length > 1) {
        name = name.replace(/\./g, "");
      } else {
        name = name.replace(/\./g, " ");
      }

      if (name.match(/\'s/g)) {
        name = name.replace(/\'s/g, " ");
      }

      if (name.match(/\'S/g)) {
        name = name.replace(/\'S/g, " ");
      }

      if (name.match(/0/g)) {
        name = name.replace(/0/g, " O ");
      }

      name = name.replace(/\_/g, " ");
      name = name.replace(/\-/g, " ");
      name = name.replace(/\#/g, " ");
      name = name.replace(/\@/g, " ");
      name = name.replace(/\:/g, " ");

      name = this.removeSpecialCharacters(name);

      // check if there is a space between two words convert both to lower case
      if (name.match(" ")) {
        name = name.toLowerCase();
      }

      name = name.trimLeft();
      name = name.trimRight();
      name = name.replace(/ +/g, " ");

      if (name === "YouTube" || name === "LinkedIn") {
        name = name.toLowerCase();
      }

      name = this.splitCamelCase(name);

      let nameList;
      let finalName;

      let another = name;
      another = another.split(" ");

      if (another.length > 1 && another[0].length === 1) {
        finalName = another[1];

        if (another[2] && (another[2] !== "") !== "")
          if (finalName.length === 1) {
            finalName = another[2];
          }
      } else {
        nameList = name.split(" ");
        let first = nameList[0];
        let second = nameList[1];

        if (first !== "" || second !== "") {
          first = first.toLowerCase();
          if (
            first === "dr" ||
            first === "the" ||
            first === "or" ||
            first === "it" ||
            first === "im"
          ) {
            finalName = second;
          } else {
            finalName = first;
          }
        }
      }

      if (finalName === "" || finalName === "unavailable") {
        finalName = "EmptyString";
      }

      return finalName;
    },
    removeEmojis(name) {
      return name.replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        " "
      );
    },
    removeSpecialCharacters(name) {
      return name.replace(/[^a-zA-Z ]/g, "");
    },
    replaceSymbols(str) {
      let accents = "$’";
      let accentsOut = "s'";

      str = str.split("");
      str.forEach((letter, index) => {
        let i = accents.indexOf(letter);
        if (i !== -1) {
          str[index] = accentsOut[i];
        }
      });
      return str.join("");
    },
    splitCamelCase(str) {
      return str.replace(/([a-z])([A-Z])/g, "$1 $2");
    },
    removeWhiteSpaces(str) {
      return str.replace(/\s/g, "");
    },
    normalizeFonts(str) {
      return str.normalize("NFKD");
    },
    convert_accented_characters(str) {
      var conversions = new Object();
      conversions["ae"] = "ä|æ|ǽ|ǣ|ᴂ";
      conversions["aa"] = "ꜳ";
      conversions["ao"] = "ꜵ";
      conversions["au"] = "ꜷ";
      conversions["av"] = "ꜹ";
      conversions["ay"] = "ꜽ";
      conversions["dz"] = "ǳ|ǆ";
      conversions["DZ"] = "Ǳ|Ǆ";
      conversions["oe"] = "ö|œ|ᴔ";
      conversions["ue"] = "ü|ᵫ";
      conversions["Ae"] = "Ä";
      conversions["Ue"] = "Ü";
      conversions["Oe"] = "Ö";

      conversions["A"] =
        "Á|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Ǎ|Â|Ấ|Ậ|Ầ|Ẩ|Ẫ|Ä|Ǟ|Ȧ|Ǡ|Ạ|Ȁ|À|Ả|Ȃ|Ā|Ą|Å|Ǻ|Ḁ|Ⱥ|Ã|ᴀ|Ɐ|🅰|ᗩ|A̶|ᴬ|Λ|ǟ|Ꮧ|ą|ค|₳|ᗅ";
      conversions["B"] = "В|Ḃ|Ḅ|Ɓ|Ḇ|Ƀ|Ƃ|ʙ|ᴃ|🅱|β|ᗷ|B̶|ᴮ|в|ɮ|Ᏸ|฿";
      conversions["C"] = "¢|Ć|Č|Ç|Ḉ|Ĉ|Ċ|Ƈ|Ȼ|Ꜿ|ᴄ|🅲|↻|ᑕ|ᑢ|C̶|ƈ|ፈ|ƈ|¢|₵";
      conversions["D"] = "Ð|Ď|Ḑ|Ḓ|Ḋ|Ḍ|Ɗ|Ḏ|ǲ|ǅ|Đ|Ƌ|Ꝺ|ᴅ|🅳|ᗪ|ᕲ|D̶|ᴰ|∂|ɖ|Ꮄ|ɖ|໓|Đ";
      conversions["E"] =
        "E̶|É|Ĕ|Ě|Ȩ|Ḝ|Ê|Ế|Ệ|Ề|Ể|Ễ|Ḙ|Ë|Ė|Ẹ|Ȅ|È|Ẻ|Ȇ|Ē|Ḗ|Ḕ|Ę|Ɇ|Ẽ|Ḛ|Ɛ|Ǝ|ᴇ|ⱻ|🅴|E|ᘿ|ᴱ|Σ|є|ɛ|Ꮛ|ɛ|ē|Ɇ|ε";
      conversions["F"] = "Ḟ|Ƒ|Ꝼ|ꜰ|🅵|ᖴ|ᖴ|F̶|ʄ|Ꭶ|ʄ|₣|£";
      conversions["G"] = "₲|G̶|Ǵ|Ğ|Ǧ|Ģ|Ĝ|Ġ|Ɠ|Ḡ|Ǥ|ɢ|ʛ|Ᵹ|🅶|G|ᘜ|ᴳ|ɢ|Ꮆ|ɠ|ງ";
      conversions["H"] = "Ḫ|Ȟ|Ḩ|Ĥ|Ⱨ|Ḧ|Ḣ|Ḥ|Ħ|ʜ|🅷|Ƕ|ᕼ|ᕼ|H̶|ᴴ|н|ɦ|Ꮒ|ɧ|Ⱨ|ђ";
      conversions["I"] = "I̶|Í|Ĭ|Ǐ|Î|Ï|Ḯ|İ|Ị|Ȉ|Ì|Ỉ|Ȋ|Ī|Į|Ɨ|Ĩ|Ḭ|ɪ|🅸|ᓰ|ᴵ|Ꭵ|ı";
      conversions["J"] = "J̶|Ĵ|Ɉ|ᴊ|🅹|ᒍ|ᒚ|ᴶ|ʝ|Ꮰ|ʝ|ว|נ";
      conversions["K"] = "K̶|Ḱ|Ǩ|Ķ|Ⱪ|Ꝃ|Ḳ|Ƙ|Ḵ|Ꝁ|Ꝅ|ᴋ|🅺|K|ᖽᐸ|ᴷ|к|ӄ|Ꮶ|ƙ|₭";
      conversions["L"] = "L̶|Ĺ|Ƚ|Ľ|Ļ|Ḽ|Ḷ|Ḹ|Ⱡ|Ꝉ|Ḻ|Ŀ|Ɫ|ǈ|Ł|Ꞁ|ʟ|ᴌ|🅻|ᒪ|ᴸ|ʟ|Ꮭ|Ɩ|Ⱡ";
      conversions["M"] = "М|M̶|ᗰ|ᴍ|Ɯ|Ḿ|Ṁ|Ṃ|Ɱ|🅼|ᘻ|ᴹ|м|ʍ|Ꮇ|ɱ|๓|₥|ϻ";
      conversions["N"] = "N̶|Ń|Ň|Ņ|Ṋ|Ṅ|Ṇ|Ǹ|Ɲ|Ṉ|Ƞ|ǋ|Ñ|ɴ|ᴎ|🅽|ហ|ᑎ|ᘉ|ᴺ|ռ|Ꮑ|ŋ|ຖ|₦|и";
      conversions["O"] =
        "O̶|Ó|Ŏ|Ǒ|Ô|Ố|Ộ|Ồ|Ổ|Ỗ|Ö|Ȫ|Ȯ|Ȱ|Ọ|Ő|Ȍ|Ò|Ỏ|Ơ|Ớ|Ợ|Ờ|Ở|Ỡ|Ȏ|Ꝋ|Ꝍ|Ō|Ṓ|Ṑ|Ɵ|Ǫ|Ǭ|Ø|Ǿ|Õ|Ṍ|Ṏ|Ȭ|Ɔ|ᴏ|ᴐ|🅾|ට|O|ᓍ|ᴼ|♢|օ|Ꭷ|ơ|໐|Ø|◍";
      conversions["P"] = "P̶|Ṕ|Ṗ|Ꝓ|Ƥ|Ꝕ|Ᵽ|Ꝑ|ᴘ|🅿|φ|ᑭ|ᕵ|ᴾ|ρ|ք|Ꭾ|℘|₱|þ";
      conversions["Q"] = "Q̶|Ꝙ|Ꝗ|🆀|Ҩ|ᑫ|ᕴ|զ|Ꭴ|զ|๑|Q";
      conversions["R"] = "Ŕ|Ř|Ŗ|Ṙ|Ṛ|Ṝ|Ȑ|Ȓ|Ṟ|Ɍ|Ɽ|Ꞃ|ʁ|ʀ|ᴙ|ᴚ|🆁|འ|ᖇ|ᴿ|я|ʀ|Ꮢ|ཞ|Ɽ";
      conversions["S"] = "S̶|Ś|Ṥ|Š|Ṧ|Ş|Ŝ|Ș|Ṡ|Ṣ|Ṩ|ꜱ|Ꞅ|🆂|Ϛ|ᔕ|ѕ|ß|ֆ|Ꮥ|ʂ|Ş|₴|§|Տ";
      conversions["T"] = "T̶|Ť|Ţ|Ṱ|Ț|Ⱦ|Ṫ|Ṭ|Ƭ|Ṯ|Ʈ|Ŧ|ᴛ|Ꞇ|🆃|Ͳ|T|ᖶ|ᵀ|т|ȶ|Ꮦ|ɬ|₮|†";
      conversions["U"] =
        "U̶|Ú|Ŭ|Ǔ|Û|Ṷ|Ü|Ǘ|Ǚ|Ǜ|Ǖ|Ṳ|Ụ|Ű|Ȕ|Ù|Ủ|Ư|Ứ|Ự|Ừ|Ử|Ữ|Ȗ|Ū|Ṻ|Ų|Ů|Ũ|Ṹ|Ṵ|ᴜ|🆄|Ա|ᑌ|ᑘ|ᵁ|υ|ʊ|Ꮼ|ų|น|Ʉ";
      conversions["V"] = "Ꝟ|Ṿ|Ʋ|Ṽ|Ʌ|ᴠ|🆅|Ỽ|ᐯ|ᐺ|V̶|ⱽ|ν|ʋ|Ꮙ|۷|ง|V";
      conversions["W"] = "Ẃ|Ŵ|Ẅ|Ẇ|Ẉ|Ẁ|Ⱳ|ᴡ|🆆|చ|ᗯ|ᘺ|W̶|ᵂ|ω|ա|Ꮗ|ῳ|ຟ|₩";
      conversions["X"] = "χ|Ẍ|Ẋ|🆇|ჯ|᙭|X̶|Ӽ|ጀ|ҳ|Ӿ|×";
      conversions["Y"] = "Y̶|Ý|Ŷ|Ÿ|Ẏ|Ỵ|Ỳ|Ƴ|Ỷ|Ỿ|Ȳ|Ɏ|Ỹ|ʏ|🆈|Ӌ|Y|ᖻ|ʏ|Ꭹ|ყ|ฯ|Ɏ|¥";
      conversions["Z"] = "Ź|Ž|Ẑ|Ⱬ|Ż|Ẓ|Ȥ|Ẕ|Ƶ|ᴢ|🆉|ᘔ|ᗱ|Z̶|ʐ|ፚ|ຊ|Ⱬ|Ζ";

      conversions["a"] =
        "á|ă|ắ|ặ|ằ|ẳ|ẵ|ǎ|â|ấ|ậ|ầ|ẩ|ẫ|ä|ǟ|ȧ|ǡ|ạ|ȁ|à|ả|ȃ|ā|ą|ᶏ|ẚ|å|ǻ|ḁ|ⱥ|ã|ª|ɐ|ₐ|α|ɑ";
      conversions["b"] = "ḃ|ḅ|ɓ|ḇ|ᵬ|ᶀ|ƀ|ƃ|Ϧ|ც";
      conversions["c"] = "ç|ć|ĉ|ċ|č|ḉ|ɕ|ƈ|ȼ|ↄ|ꜿ|ᶜ";
      conversions["d"] = "ð|ď|ḑ|ḓ|ȡ|ḋ|ḍ|ɗ|ᶑ|ḏ|ᵭ|ᶁ|đ|ɖ|ƌ|ꝺ";
      conversions["e"] =
        "é|ĕ|ě|ȩ|ḝ|ê|ế|ệ|ề|ể|ễ|ḙ|ë|ė|ẹ|ȅ|è|ẻ|ȇ|ē|ḗ|ḕ|ⱸ|ę|ᶒ|ɇ|ẽ|ḛ|ɛ|ᶓ|ɘ|ǝ|ₑ|ᥱ";
      conversions["f"] = "ḟ|ƒ|ᵮ|ᶂ|ꝼ|ᶠ";
      conversions["g"] = "ǵ|ğ|ǧ|ģ|ĝ|ġ|ɠ|ḡ|ᶃ|ǥ|ᵹ|ɡ|ᵷ";
      conversions["h"] = "ɥ|ʮ|ʯ|ḫ|ȟ|ḩ|ĥ|ⱨ|ḧ|ḣ|ḥ|ɦ|ẖ|ħ|ₕ";
      conversions["i"] = "ᴉ|ı|í|ĭ|ǐ|î|ï|ḯ|ị|ȉ|ì|ỉ|ȋ|ī|į|ᶖ|ɨ|ĩ|ḭ|ᵢ|!|¡|ι";
      conversions["j"] = "ȷ|ɟ|ʄ|ǰ|ĵ|ʝ|ɉ|ⱼ";
      conversions["k"] = "ḱ|ǩ|ķ|ⱪ|ꝃ|ḳ|ƙ|ḵ|ᶄ|ꝁ|ʞ|ₖ|ќ";
      conversions["l"] = "ĺ|ƚ|ɬ|ľ|ļ|ḽ|ȴ|ḷ|ḹ|ⱡ|ꝉ|ḻ|ŀ|ɫ|ᶅ|ɭ|ł|ꞁ|ₗ|ℓ|ᥣ";
      conversions["m"] = "ḿ|ṁ|ṃ|ɱ|ᵯ|ᶆ|ɯ|ɰ|ₘ";
      conversions["n"] = "ń|ň|ņ|ṋ|ȵ|ṅ|ṇ|ǹ|ɲ|ṉ|ƞ|ᵰ|ᶇ|ɳ|ñ|ŉ|ₙ|ᥒ|η|ή";
      conversions["o"] =
        "о|ᴓ|ᴑ|ó|ŏ|ǒ|ô|ố|ộ|ồ|ổ|ỗ|ö|ȫ|ȯ|ȱ|ọ|ő|ȍ|ò|ỏ|ơ|ớ|ợ|ờ|ở|ỡ|ȏ|ꝋ|ꝍ|ⱺ|ō|ṓ|ṑ|ǫ|ǭ|ø|ǿ|õ|ṍ|ṏ|ȭ|ɔ|ᶗ|º|ₒ|ɵ|σ";
      conversions["p"] = "ṕ|ṗ|ꝓ|ƥ|ᵱ|ᶈ|ꝕ|ᵽ|ꝑ|ₚ";
      conversions["q"] = "ꝙ|ʠ|ɋ|ꝗ";
      conversions["r"] = "ŕ|ř|ŗ|ṙ|ṛ|ṝ|ȑ|ɾ|ᵳ|ȓ|ṟ|ɼ|ᵲ|ᶉ|ɍ|ɽ|ɿ|ɹ|ɻ|ɺ|ⱹ|ᵣ|ꞃ|r";
      conversions["s"] = "ſ|ẜ|ẛ|ẝ|ś|ṥ|š|ṧ|ş|ŝ|ș|ṡ|ṣ|ṩ|ʂ|ᵴ|ᶊ|ȿ|ꞅ|ₛ|ˢ|ς";
      conversions["t"] = "ť|ţ|ṱ|ț|ȶ|ẗ|ⱦ|ṫ|ṭ|ƭ|ṯ|ᵵ|ƫ|ʈ|ŧ|ʇ|ꞇ|ₜ";
      conversions["u"] =
        "ú|ŭ|ǔ|û|ṷ|ü|ǘ|ǚ|ǜ|ǖ|ṳ|ụ|ű|ȕ|ù|ủ|ư|ứ|ự|ừ|ử|ữ|ȗ|ū|ṻ|ų|ᶙ|ů|ũ|ṹ|ṵ|ᴝ|ᵤ";
      conversions["v"] = "ⱴ|ꝟ|ṿ|ʋ|ᶌ|ⱱ|ṽ|ʌ|ᵥ";
      conversions["w"] = "ẃ|ŵ|ẅ|ẇ|ẉ|ẁ|ⱳ|ẘ|ʍ";
      conversions["x"] = "ẍ|ẋ|ᶍ|ₓ|ˣ";
      conversions["y"] = "у|ý|ŷ|ÿ|ẏ|ỵ|ỳ|ƴ|ỷ|ỿ|ȳ|ẙ|ɏ|ỹ|ʎ|ʸ";
      conversions["z"] = "ź|ž|ẑ|ʑ|ⱬ|ż|ẓ|ȥ|ẕ|ᵶ|ᶎ|ʐ|ƶ|ɀ|ᶻ|z|ʑ";
      conversions["AE"] = "Æ|Ǽ|Ǣ|ᴁ";
      conversions["AA"] = "Ꜳ";
      conversions["AO"] = "Ꜵ";
      conversions["AU"] = "Ꜷ";
      conversions["AV"] = "Ꜹ|Ꜻ";
      conversions["AY"] = "Ꜽ";

      conversions["IJ"] = "Ĳ";
      conversions["ij"] = "ĳ";
      conversions["OE"] = "Œ|ɶ";

      conversions["ff"] = "ﬀ";
      conversions["ffi"] = "ﬃ";
      conversions["ffl"] = "ﬄ";
      conversions["fi"] = "ﬁ";
      conversions["fl"] = "ﬂ";
      conversions["tz"] = "ꜩ";
      conversions["um"] = "ꝸ";
      conversions["vy"] = "ꝡ";
      conversions["st"] = "ﬆ";
      conversions["nj"] = "ǌ";
      conversions["oi"] = "ƣ";
      conversions["oo"] = "ꝏ";
      conversions["ET"] = "Ꝫ";
      conversions["IS"] = "Ꝭ";
      conversions["LJ"] = "Ǉ";
      conversions["NJ"] = "Ǌ";
      conversions["OI"] = "Ƣ";
      conversions["OO"] = "Ꝏ";
      conversions["OU"] = "Ȣ";
      conversions["TZ"] = "Ꜩ";
      conversions["VY"] = "Ꝡ";
      conversions["OU"] = "ᴕ";
      conversions["et"] = "ꝫ";
      conversions["hv"] = "ƕ";
      conversions["is"] = "ꝭ";
      conversions["lj"] = "ǉ";
      conversions["ou"] = "ȣ";
      conversions["th"] = "ᵺ";

      for (var i in conversions) {
        var re = new RegExp(conversions[i], "g");
        str = str.replace(re, i);
      }
      return str;
    },

    onSubmit() {
      const user = auth.getCurrentUser();
      console.log("clcikec");
      const url = "http://localhost:4000/api/tweets/";

      if (this.tweet.annotations.annotators != null) {
        const u = this.tweet.annotations.annotators.filter(
          annotator => annotator._id === user._id
        ).length;
        if (u == 0) {
          this.form["annotators"] = [
            ...this.tweet.annotations.annotators,
            user
          ];
        }
      } else {
        this.form["annotators"] = [user];
      }

      axios
        .patch(`${url}${this.tweet._id}`, this.form)
        .then(response => {
          if (response.statusText == "OK") {
            this.$message({
              showClose: true,
              message: "Tweet annotated!",
              type: "success"
            });
          }
        })
        .catch(error => {
          console.log("-------", error);
          this.$message({
            showClose: true,
            message: "Something went wrong!",
            type: "error"
          });
        });
    },
    onNext() {
      this.$emit("next");
    }
  }
};
</script>
