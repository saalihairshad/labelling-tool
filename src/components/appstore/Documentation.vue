<template>
  <div class="container">
    <div class="pt-3">
      <h3>Sentiment Analysis</h3>
      <p>
        In our tool you will be required to give a sentiment score for each
        tweet. Your assessment will be based on evaluating both, the user
        experience and the language that the user used. In the labeling tool
        there are 5 scores which range from very negative to very positive:
      </p>
      <div class="pt-3">
        <h4>Very Negative</h4>
        <p>
          The review text is very negative. In this case the user might use
          words like “hate” or “terrible”. They can also get insulting. Also all
          caps can be an indication of a very negative review.
        </p>

        <h5>Examples</h5>
        <ul class="list-group list-group-flush list-unstyled mylist">
          <li>
            <i class="icon-navigate_next mx-2"></i>
            I hate the upload functionality from Dropbox
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            3rd time deleting this stupid app
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            This app is good in crashing every time I try to do something. This
            app is an utter waste of money and time!
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            FIRE ALL THE MONKEYS WORKING ON THIS APP!
          </li>
        </ul>
      </div>

      <div class="pt-3">
        <h4>Negative</h4>
        <p>
          The review text is rather negative but not extreme.
        </p>

        <h5>Examples</h5>
        <ul class="list-group list-group-flush list-unstyled mylist">
          <li>
            <i class="icon-navigate_next mx-2"></i>
            Don't like the upload functionality from dropbox
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            The app is useless until you fix the syncing issue
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            How many engineers have you hired?” (The user is mocking the bad
            engineering of the app)
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            My friends lost all his photos because of this app
          </li>
        </ul>
      </div>

      <div class="pt-3">
        <h4>Neutral</h4>
        <p>
          The review text is neutral (neither negative nor positive).
        </p>

        <h5>Examples</h5>
        <ul class="list-group list-group-flush list-unstyled mylist">
          <li>
            <i class="icon-navigate_next mx-2"></i>
            Dropbox lets me upload my files
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            Need to be able to link my docs
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            background It can be more colorful and fun
          </li>
        </ul>
      </div>

      <div class="pt-3">
        <h4>Positive</h4>
        <p>
          The review text is rather positive but not very enthusiastic.
        </p>

        <h5>Examples</h5>
        <ul class="list-group list-group-flush list-unstyled mylist">
          <li>
            <i class="icon-navigate_next mx-2"></i>
            I like that dropbox lets me upload my files
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            now the app works as expected
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            Finally the monkeys working on this app did something right!
          </li>
        </ul>
      </div>

      <div class="pt-3">
        <h4>Very Positive</h4>
        <p>
          The review text is very positive, usually words like “love”, “great”
          or superlatives like “best”, “most”.
        </p>

        <h5>Examples</h5>
        <ul class="list-group list-group-flush list-unstyled mylist">
          <li>
            <i class="icon-navigate_next mx-2"></i>
            I love that dropbox lets me upload my files
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            Best app ever!!
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            Best Twitter twitter twitter! I love it! Any time I need a good
            laugh and need to know what’s going on in the world, I can get a
            good laugh from off twitter and get information too
          </li>
        </ul>
      </div>
    </div>

    <hr />
    <div class="pt-3">
      <h3>Classify the Tweet</h3>
      <p>The tweet should be coded based on the categories explained below.</p>
      <h4>What is a Feature?</h4>
      <p>
        A feature does not only cover the functionality of the app but rather
        any kind of characteristic an app can have. It can be a description of a
        specific app functionality visible to the user (e.g. uploading files,
        sending an email, adding friends, follow, unfollow etc.) A feature can
        be the user interface, performance, price, usability, reliability,
        compatibility, updates, security and privacy, and any characteristic of
        the app. Any hint on where exactly an improvement could take place or
        where something explicitly is stated as useful can be seen as a feature.
        A feature can also be a specific screen of the app, a general quality of
        the app (such as time needed to load, encryption, size of storage, file
        types, a license, or a price) as well as specific technical
        characteristics a certain technology or a specific version of a
        technology (e.g. a network protocol, HTML5, etc.).
      </p>

      <div class="pt-3">
        <h4>Feature Request</h4>
        <p>
          The user asks for a <u>missing feature</u>, missing functionality,
          missing content or a feature that should be implemented or improved.
          For example:
        </p>

        <h5>Examples</h5>
        <ul class="list-group list-group-flush list-unstyled mylist">
          <li>
            <i class="icon-navigate_next mx-2"></i>
            It <u>would be</u> great if we could copy and paste
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            The app is slow when I am on the road.
            <u>Would be nice to improve</u> this
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            I <u>wish you could add</u> a link that would allow me to share the
            information with my Facebook friends
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            1 Star <u>Give us</u> an option to remove seeing retweet’s from
            people we follow
          </li>
        </ul>
      </div>

      <div class="pt-3">
        <h4>Bug Report</h4>
        <p>
          The category Bug refers to feedback where concrete problems with the
          software are reported that can and/or should be solved by the
          provider. Such problems refer to the faulty behavior of the
          application or of a specific feature. Users often use words such as
          “crash”, “fix” or “error” when they report a bug. Moreover, bug
          reports can also refer to a certain feature that worked fine before
          and then suddenly crashed or stopped working. For example:
        </p>

        <h5>Examples</h5>
        <ul class="list-group list-group-flush list-unstyled mylist">
          <li>
            <i class="icon-navigate_next mx-2"></i>
            Every time I start the app, it <u>crashes</u>!
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            I'm really disappointed with the IOS 7 version of this app,
            <u>saving documents doesn’t work</u> anymore
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            Was nice, <u>won't open</u> since update
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            Uploading <u>is not working</u> with the iOS6
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            After the new update, my mobile <u>freezes</u> after I've been using
            the app for a few minutes.
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            I <u>lost all</u> my phone contacts. Great, thank you!
          </li>

          <li>
            <i class="icon-navigate_next mx-2"></i>
            HOW I GONNA DELETE PREMIERE PRO AND THE SHITS STILL OPEN????
            https://t.co/KBnqUEqZW5
          </li>
        </ul>
      </div>

      <div class="pt-3">
        <h4>General Complaint</h4>
        <p>
          The user expresses general dissatisfaction with the application. It
          includes topics that are related to the judgment of the application as
          a whole. The user uses words like "Hate", "horrible" or "crap" for a
          general complaint. There is <u>no hint at all</u>, why the application
          is unsatisfying or what is explicitly negative about it (otherwise it
          is feature shortcoming). In contrast, feature shortcomings focus on
          the negative feedback about an existing feature. Code the review only
          as a general complaint if there are no references to the other
          categories. In addition, do not tick the general praise box if the
          general complaint relates to the content and not to the software.
        </p>

        <h5>Examples</h5>
        <ul class="list-group list-group-flush list-unstyled mylist">
          <li>
            <i class="icon-navigate_next mx-2"></i>
            This game is <u>horrible</u>! What a waste of time.
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            DONT DOWNLOAD THIS APP EVER <u>its horrible</u>!
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            Twitter <u>Too complicated. Too many features</u>. A good service
            but keep it simple!
          </li>
        </ul>
      </div>

      <div class="pt-3">
        <h4>General Praise</h4>
        <p>
          The user expresses his general satisfaction with the mobile
          application/software. The user can use words like "Awesome" "Nice" or
          "Love it" to show his/her satisfaction with the mobile
          application/software. There are no indications of system components
          that do not work or features that the user has not yet experienced.
          Code the review only as general praise if there are no references to
          the other categories. In addition, do not tick the general praise box
          if the general praise relates to the content and not to the software.
          You can find example sentences below where users used a general
          praise:
        </p>

        <h5>Examples</h5>
        <ul class="list-group list-group-flush list-unstyled mylist">
          <li>
            <i class="icon-navigate_next mx-2"></i>
            Dear @SlackHQ <u>THANK YOU</u> for the "magic links" that can tie
            one mail account to the various slack channels when I migrate to a
            new device....You just saved hours of freaking complex-as-hell
            password typing!!
            <a href="https://t.co/eLW1pDleZl">https://t.co/eLW1pDleZl</a>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            <strong
              >Ice work on the adaptability of the programming to user
              needs</strong
            >
            I have used twitter for about 6 years now and
            <u>I have not been disappointed in its ability to connect me</u>
            with things that I like while helping me avoid news that brings me
            down. Thanks Twitter vs. FB
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            <strong>Best</strong> Twitter twitter twitter! I <u>love it</u>! Any
            time I need a good laugh and need to know what’s going on in the
            world, I can get a good laugh from off twitter and get information
            too
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            <strong><u>Best app ever</u></strong
            >! Twitter is #1 for world news! Its my live diary. It’s where I get
            inspiration and lots of laughs. The only social media app I’ll never
            get rid of..
          </li>
        </ul>
      </div>

      <div class="pt-3">
        <h4>Noise</h4>
        <p>
          Select this option only for non-English reviews or nonsense symbols or
          reviews that do not make any sense.
        </p>

        <h5>Examples</h5>
        <ul class="list-group list-group-flush list-unstyled mylist">
          <li>
            <i class="icon-navigate_next mx-2"></i>
            ???!? #$! ??!
          </li>
        </ul>
      </div>

      <div class="pt-3">
        <h4>Other</h4>
        <p>
          In case the review includes another category not included in the
          codings explained in these guidelines or is clearly not related to the
          software but rather towards the content only. When this option is
          selected, an input field appears in the coding tool therefore, please
          suggest a new category in the field which will be applicable for this
          review.
        </p>

        <h5>Examples</h5>
        <ul class="list-group list-group-flush list-unstyled mylist">
          <li>
            <i class="icon-navigate_next mx-2"></i>
            @Adobe will you be helping students get easier access to your
            programs while schools are being forced to close? I shouldn’t be
            paying over $200 for programs I’ll only need during my university’s
            suspension
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            <strong>Moral police</strong> Tired of censoring non politically
            correct content
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            <strong>Vital</strong>... ...but MUST do a better job ferreting out
            harassment, racism, and bots. Twitter is what you make of it; whom
            you follow.
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            It's not me!
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            I’m a horrible person
          </li>
        </ul>
      </div>

      <div class="pt-3">
        <h4>Support Request</h4>
        <p>
          While using an app or a certain feature if the user faces a problem
          and asks for a suggestion on how to solve it or use an app then it
          will be considered as a support request. It might also contain
          technical questions on how to do something.
        </p>

        <h5>Examples</h5>
        <ul class="list-group list-group-flush list-unstyled mylist">
          <li>
            <i class="icon-navigate_next mx-2"></i>
            @Adobe Please help me with a complicated support issue. I've wasted
            hours on the phone and chat with no resolution. Surely there is
            someone who can understand my issue and help.
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            hey @SlackHQ, how do I change my browser in the slack desktop app? I
            don't see the settings option.
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            Dalton Lane How can I get my verification check on Twitter?
          </li>
        </ul>
      </div>
    </div>

    <hr />
    <div class="pt-3">
      <h3>Gender Classification</h3>
      <p></p>

      <h4>Male</h4>
    </div>
  </div>
</template>

<style>
.mylist li {
  padding: 10px 0;
}
</style>
