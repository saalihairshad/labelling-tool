<template>
  <div class="container" id="introduction">
    <p>
      The content of the Reviews/Tweets, their sentiment analysis, and gender
      labeling will be done using this coding tool. The content is categorized
      as follows and each category is explained in the content in more detail
      later in this guide.
    </p>

    <div class="row">
      <div class="col">
        <ol class="">
          <li class="pb-3">
            <strong>Sentiment Analysis:</strong> Assess the sentiment of each
            review. A five-level Likert scale from very positive to very
            negative (Very Negative, Negative, Neutral, Positive, Very Positive)
            should be used to code the sentiment. For more information please
            visit the <a href="#sentiment">Sentiment Analysis</a> section.
          </li>
          <li class="pb-3">
            <strong>Classify the Reviews/Tweets:</strong> Indicate the content
            of the tweet belongs to which category. The content is classified as
            follows:
            <ul class="pb-1">
              <li class="pt-1">
                <i class="icon-navigate_next mx-2"></i>Feature Request
              </li>
              <li><i class="icon-navigate_next mx-2"></i>Bug Report</li>
              <li><i class="icon-navigate_next mx-2"></i>Support Request</li>
              <li><i class="icon-navigate_next mx-2"></i>General Complaint</li>
              <li><i class="icon-navigate_next mx-2"></i>General Praise</li>
              <li><i class="icon-navigate_next mx-2"></i>Noise</li>
              <li><i class="icon-navigate_next mx-2"></i>Other</li>
            </ul>
            For more information please visit the
            <a href="#content">Content Classification</a> section.
          </li>
          <li class="pb-2">
            <strong>Gender Coding:</strong> Indicate the gender of the user
            posting a Review/Tweet. The gender is classified as Femal, Male and
            Unclear. For more information please visit the
            <a href="#gender">Gender Classification</a> section.
          </li>
        </ol>
      </div>
    </div>

    <div class="alert alert-primary" role="alert" style="border-radius:0px">
      <i class="icon-info_outline mx-2 "></i>If the conyent of a Review/Tweet is "Noise"
      then please mark the sentiment as "Neutral".
    </div>

    <div class="pt-3" id="sentiment">
      <h3>Sentiment Analysis</h3>
      <p>
        In this tool you will be required to give a sentiment score for each
        Review/Tweet. Your assessment will be based on evaluating both,
        <strong>the user experience</strong> and
        <strong>the language</strong> that the user used. There are 5 scores in
        the tool that range from very negative to very positive:
      </p>
      <div class="pt-3">
        <h4>Very Negative</h4>
        <p>
          The Review/Tweet text is very negative. In this case the user might
          use words like “hate” or “terrible”. They can also get insulting. Also
          all caps can be an indication of a very negative review.
        </p>

        <h5>Examples</h5>
        <ul class="list-group list-group-flush list-unstyled mylist">
          <li>
            <i class="icon-navigate_next mx-2"></i>
            I <u>hate</u> the upload functionality from Dropbox
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as very
                negative because it contains the word hate.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            3rd time <u>deleting this stupid app</u>
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as very
                negative as it offends the app.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            This app is good in crashing every time I try to do something. This
            app is an <u>utter waste</u> of money and time!
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as very
                negative as it offends the app.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            FIRE ALL THE MONKEYS WORKING ON THIS APP!
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as very
                negative, as it offends the developers. Furthermore, the
                capitalized words express that the author is angry.
              </em>
            </p>
          </li>

          <li>
            <i class="icon-navigate_next mx-2"></i>
            <strong>Bad:</strong> The update is <u>really</u> bad,please change
            it back
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>:This review was marked as very
                negative because the word really indicates the frustration of
                the author.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            “<strong
              >Lacks <u>ability to edit / create maps from app:</u></strong
            >
            My Maps is a disappointing omission”
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as very
                negative as it offends the app.</em
              >
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            <strong>Fix thisss: </strong> Can Snapchat please fix the issue
            where the images on iPhone XR are zoomed in!!! Like I can only
            capture my zoomed in face and nothing else!!!
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as very
                negative because the explanation marks express that the author
                is angry.</em
              >
            </p>
          </li>
        </ul>
      </div>

      <div class="pt-3">
        <h4>Negative</h4>
        <p>
          The Review/Tweet text is rather negative but not extreme.
        </p>

        <h5>Examples</h5>
        <ul class="list-group list-group-flush list-unstyled mylist">
          <li>
            <i class="icon-navigate_next mx-2"></i>
            <u>Don't</u> like the upload functionality from dropbox
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as
                negative because the author expresses that he does not like it.
                However, he does not use capital letters or words like hate or
                really, which would express a very negative review. .</em
              >
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            The app is <u>useless</u> until you fix the syncing issue
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as
                negative because the author expresses that he does not like it.
                However, he does not use capital letters or words like hate or
                really, which would express a very negative review.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            How many engineers have you hired?” (The user is mocking the bad
            engineering of the app)
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: The user is mocking the bad
                engineering of the app.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            My friends lost all his photos because of this app
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as
                negative because the author does not provide constructive
                criticism and thus expresses a negative sentiment.
              </em>
            </p>
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
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as
                neutral because the author offers constructive criticism.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            Need to be able to link my docs
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as
                neutral because the author offers a constructive feature
                request.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            background It can be more colorful and fun
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as
                neutral because the author offers a constructive feature
                request.
              </em>
            </p>
          </li>

          <li>
            <i class="icon-navigate_next mx-2"></i>
            <strong> Need dark mode for ios: </strong> Why this new update for
            iOS is in light mode? The previous version was dark mode.
            <u>kindly</u> please bring back the dark mode .

            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as
                neutral because the author offers constructive criticism.
              </em>
            </p>
          </li>

          <li>
            <i class="icon-navigate_next mx-2"></i>
            <strong>Problem:</strong> I cnt follow and like any post

            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as
                neutral because the author offers constructive criticism.
              </em>
            </p>
          </li>
        </ul>
      </div>

      <div class="pt-3">
        <h4>Positive</h4>
        <p>
          The Review/Tweet text is rather positive but not very enthusiastic.
        </p>

        <h5>Examples</h5>
        <ul class="list-group list-group-flush list-unstyled mylist">
          <li>
            <i class="icon-navigate_next mx-2"></i>
            I <u>like</u> that dropbox lets me upload my files
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as
                positive because the author uses the word like and thus
                expresses a positive sentiment.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            now the app works as expected
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as
                positive because the author is satisfied with the app.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            Finally the monkeys working on this app did something <u>right</u>!
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as
                positive because the author uses the word “right” and thus
                expresses that something positive has been achieved.
              </em>
            </p>
          </li>
        </ul>
      </div>

      <div class="pt-3">
        <h4>Very Positive</h4>
        <p>
          The Review/Tweet text is very positive, usually words like “love”,
          “great” or superlatives like “best”, “most”.
        </p>

        <h5>Examples</h5>
        <ul class="list-group list-group-flush list-unstyled mylist">
          <li>
            <i class="icon-navigate_next mx-2"></i>
            I <u>love</u> that dropbox lets me upload my files
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as very
                positive, because the author uses the word "love" and thus
                emphasizes his satisfaction.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            <u>Best</u> app ever!!
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as very
                positive, because the author uses the word "best" and thus
                emphasizes his satisfaction.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            <u>Best</u> Twitter twitter twitter! I love it! Any time I need a
            good laugh and need to know what’s going on in the world, I can get
            a good laugh from off twitter and get information too
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as very
                positive, because the author uses the word "best" and thus
                emphasizes his satisfaction.
              </em>
            </p>
          </li>

          <li>
            <i class="icon-navigate_next mx-2"></i>
            <u><strong>Amazing</strong></u> Follow and like
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as very
                positive, because the author uses the word "amazing" and thus
                emphasizes his satisfaction.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            <u><strong>Handy Notebook</strong></u> I love GoodNotes. I plan an
            write all my lesson plans for the classes I teach. I use it for
            notes for everything and anything.
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as very
                positive, because the author uses the word "love" and thus
                emphasizes his satisfaction.
              </em>
            </p>
          </li>
        </ul>
      </div>
    </div>

    <hr />
    <div class="pt-3" id="content">
      <h3>Content Classification</h3>
      <p>
        The Review/Tweet should be coded based on the categories explained
        below.
      </p>
      <h4>What is a Feature?</h4>
      <p class="align-baseline">
        A feature does not only cover the functionality of the app but rather
        any kind of characteristic an app can have. It can be a description of a
        specific app functionality visible to the user (e.g. uploading files,
        sending an email, adding friends, follow, unfollow etc.) A feature can
        be the
        <strong
          >user interface, performance, price, usability, reliability,
          compatibility, updates, security and privacy,</strong
        >
        and any characteristic of the app. Any hint on where exactly an
        improvement could take place or where something explicitly is stated as
        useful can be seen as a feature.
        <strong>Feature Shortcomings</strong> are also counted as Feature
        Requests. These are characterized by the fact that they were implemented
        in an earlier version, but not in the new version.
        <br />
        <br />
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
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as a
                feature request, as the words “would be” implying that he would
                like a new feature.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            The app is slow when I am on the road.
            <u>Would be nice to improve</u> this
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as a
                feature request, as the words “would be” implying that he would
                like a new feature.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            I <u>wish you could add</u> a link that would allow me to share the
            information with my Facebook friends
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as a
                feature request, as the word “wish” implying that he would like
                a new feature.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            1 Star <u>Give us</u> an option to remove seeing retweet’s from
            people we follow
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as a
                feature request, as the word “give” implying that he would like
                a new feature.
              </em>
            </p>
          </li>

          <li>
            <i class="icon-navigate_next mx-2"></i>
            <strong>#givebts100Mback</strong> Stop deleting bts on mv views!!!
            😡 Give us our views back. We are not bots we worked hard for this
            big amt of views. Stop giving excuses and give 100m views back.
            Please fix your system and RESTORE THE VIEWS.
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as a
                Feature Request because the author wants the view display or the
                way the views are counted to be changed.
              </em>
            </p>
          </li>

          <li>
            <i class="icon-navigate_next mx-2"></i>
            <strong>Deleting views</strong> What a racist app. You didn’t have
            to delete at around 67 million views from a video. Rude app and no
            respect 😤😤😠
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as a
                Feature Request because the author wants the view display or the
                way the views are counted to be changed.
              </em>
            </p>
          </li>

          <li>
            <i class="icon-navigate_next mx-2"></i>
            <strong>TikTok</strong> I love TikTok so much it is such a good app
            and I would hope that you could turn the heart to a pumpkin for
            Halloween
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as a
                feature request, as the words “would be” implying that he would
                like a new feature.
              </em>
            </p>
          </li>

          <li>
            <i class="icon-navigate_next mx-2"></i>
            <strong>Desapointing</strong> They removed the option to choose kind
            of genre when selecting films, totally crap
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as a
                feature request because the author wants a feature back, but
                what was previously available is no longer.
              </em>
            </p>
          </li>

          <li>
            <i class="icon-navigate_next mx-2"></i>
            <strong><u>Lacks ability to edit / create maps from app</u></strong>
            My Maps is a disappointing omission
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as a
                feature request, because the author points out that a feature is
                missing what he would like to have.
              </em>
            </p>
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
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as a
                bug report, because the author points out that there is a
                problem when starting the app.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            I'm really disappointed with the IOS 7 version of this app,
            <u>saving documents doesn’t work</u> anymore
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as a
                bug report, because the author points out that there is a
                problem when trying to save documents.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            Was nice, <u>won't open</u> since update
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as a
                bug report, because the author points out that there is a
                problem when trying to update the app.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            Uploading <u>is not working</u> with the iOS6
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as a
                bug report, because the author points out that there is a
                problem when trying to update the app.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            After the new update, my mobile <u>freezes</u> after I've been using
            the app for a few minutes.
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as a
                bug report, because the author points out that there is a
                problem when trying to update the app.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            I <u>lost all</u> my phone contacts. Great, thank you!
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as a
                bug report because the author points out that there is a bug in
                the app that causes undesirable behavior.</em
              >
            </p>
          </li>

          <li>
            <i class="icon-navigate_next mx-2"></i>
            HOW I GONNA DELETE PREMIERE PRO AND THE SHITS STILL OPEN????
            https://t.co/KBnqUEqZW5
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as a
                bug report because the author points out that there is a bug in
                the app that causes undesirable behavior.
              </em>
            </p>
          </li>

          <li>
            <i class="icon-navigate_next mx-2"></i>
            Problem I cnt follow and like any post
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as a
                bug report, because the author points out that there is a
                problem when trying to use a specific feature of the app.
              </em>
            </p>
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
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as a
                general complaint as the author points out that he does not like
                the app, but does not give specific reasons for this.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            DONT DOWNLOAD THIS APP EVER <u>its horrible</u>!
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as a
                general complaint as the author points out that he does not like
                the app, but does not give specific reasons for this.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            Twitter <u>Too complicated. Too many features</u>. A good service
            but keep it simple!
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as a
                general complaint as the author points out that he does not like
                the app, but does not give specific reasons for this.</em
              >
            </p>
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
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as general
                praise, as the author points out that he likes the app very
                much, but does not give any specific reasons for this.
              </em>
            </p>
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
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as general
                praise, as the author points out that he likes the app very
                much, but does not give any specific reasons for this.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            <strong>Best</strong> Twitter twitter twitter! I <u>love it</u>! Any
            time I need a good laugh and need to know what’s going on in the
            world, I can get a good laugh from off twitter and get information
            too
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as general
                praise, as the author points out that he likes the app very
                much, but does not give any specific reasons for this.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            <strong><u>Best app ever</u></strong
            >! Twitter is #1 for world news! Its my live diary. It’s where I get
            inspiration and lots of laughs. The only social media app I’ll never
            get rid of..
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as general
                praise, as the author points out that he likes the app very
                much, but does not give any specific reasons for this.
              </em>
            </p>
          </li>
        </ul>
      </div>

      <div class="pt-3">
        <h4>Noise</h4>
        <p>
          Select this option <u>only</u> for non-English Reviews/Tweets or
          nonsense symbols or Reviews/Tweets that do not make any sense.
        </p>

        <h5>Examples</h5>
        <ul class="list-group list-group-flush list-unstyled mylist">
          <li>
            <i class="icon-navigate_next mx-2"></i>
            ???!? #$! ??!
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This is marked as Noise because
                it only contains special characters and symbols and does not
                convey any meaningful information.</em
              >
            </p>
          </li>

          <li>
            <i class="icon-navigate_next mx-2"></i>
            We bake a little b Epi e
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This is marked as Noise because
                it does not convey any meaningful information.
              </em>
            </p>
          </li>
        </ul>
      </div>

      <div class="pt-3">
        <h4>Other</h4>
        <p>
          In case the Review/Tweet includes another category not included in the
          codings explained in these guidelines or is clearly not related to the
          software but rather towards the content only. When this option is
          selected, an input field appears in the coding tool therefore, please
          suggest a new category in the field which will be applicable for this
          Review/Tweet.
        </p>

        <h5>Examples</h5>
        <ul class="list-group list-group-flush list-unstyled mylist">
          <li>
            <i class="icon-navigate_next mx-2"></i>
            @Adobe will you be helping students get easier access to your
            programs while schools are being forced to close? I shouldn’t be
            paying over $200 for programs I’ll only need during my university’s
            suspension
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as
                Other, as the author points out that he does not like Adobe's
                pricing policy. This has nothing to do with the software
                evolution.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            <strong>Moral police</strong> Tired of censoring non politically
            correct content
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as
                Other, as the author points out that he does not like Twitter’s
                policy. This has nothing to do with the software evolution.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            <strong>Vital</strong>... ...but MUST do a better job ferreting out
            harassment, racism, and bots. Twitter is what you make of it; whom
            you follow.
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as
                Other, as the author points out that he does not like Twitter’s
                policy. This has nothing to do with the software evolution.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            It's not me!
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as
                Others because the author points something out which has nothing
                to do with the app.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            I’m a horrible person
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as
                Others because the author points something out which has nothing
                to do with the app.
              </em>
            </p>
          </li>
          If the user Review/Tweet is related to the content of the mobile
          application, please tick the “other” category and write in the open
          field “Content”. Examples for content-related Reviews/Tweets are:
          <li class="pt-4">
            <i class="icon-navigate_next mx-2"></i>
            To all the boys p.s. I still love you The movie is so great and it's
            so much better than the first one
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em><strong>Explanation</strong>: </em>
            </p>
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
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as a
                support request, because the author asks the developers for
                help.</em
              >
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            hey @SlackHQ, how do I change my browser in the slack desktop app? I
            don't see the settings option.
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as a
                support request, because the author asks the developers for
                help.
              </em>
            </p>
          </li>
          <li>
            <i class="icon-navigate_next mx-2"></i>
            Dalton Lane How can I get my verification check on Twitter?
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review was marked as a
                support request, because the author asks the developers for
                help.
              </em>
            </p>
          </li>
        </ul>
      </div>

      <div class="pt-3">
        <h4>Multiple Categories</h4>
        <p>
          You can code more than one category if there exists a bug report and
          feature request in one user feedback. You are only allowed to choose
          more than one category when you find this combination.
        </p>

        <h5>Examples</h5>
        <ul class="list-group list-group-flush list-unstyled mylist">
          <li>
            <i class="icon-navigate_next mx-2"></i>
            <u>Can't</u> update.', 'The <u>lack of concrete information</u> in
            "What's new" stops me from updating. We need changelog for every
            version too.
            <p class="pl-4">
              <i class="icon-hand-o-right mx-2"></i>
              <em
                ><strong>Explanation</strong>: This review has been marked as a
                feature request and bug report, because the author has reported
                a bug and then submits a feature request.
              </em>
            </p>
          </li>
        </ul>
      </div>
    </div>

    <hr />
    <div class="py-3" id="gender">
      <h3>Gender Classification</h3>
      <p>
        The gender will be encoded accorging to a user's first name and the
        country of origin. In the gender section the tool represent the real
        name of the user as "Original Name" and the first name as "Formatted
        Name". All you need to do is to click the "Detect Gender" button and
        tool will automatically select the gender as female, male or unknown.
        The API used to detect the gender is provided here:
        <a href="https://gender-api.com/en/">https://gender-api.com/en/</a>.
      </p>

      <div
        class="alert"
        role="alert"
        style="border-radius:0 10px 0 0 ; background-color:#eee"
      >
        <!-- <i class="icon-lightbulb_outline mx-2 float-right"></i> -->
        <p>
          The algorithm in the tool selects the first word as the
          <strong>Formatted Name</strong> except for titles (Dr, The etc) where
          the second word is selected as the <strong>Formatted Name</strong>.
          Some user names are four or more words, such sentences might contain
          actual name of the user for instance <em>"This is Jimmy"</em>, in this
          case you can enter the name (Jimmy) in the input that appears if you
          click the pencil icon right beside the Formatted Name. After entering
          the name click the <strong>Detect Gender</strong> button and the tool
          will select among the give options.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.mylist li {
  padding: 6px 0;
}
</style>
