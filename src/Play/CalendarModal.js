import React from "react";

const CalendarModal = () => {
  return (
    <div>
      {/* Modal  */}
      <div
        class="modal fade"
        id="staticBackdrop1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Guide To Kegel Exercises
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">
              <div class="w-100 tooltipContentMobile">
                <p>
                  Kegel Exercises (also known as pelvic floor exercises) are
                  designed to strengthen your pelvic floor muscles. The pelvic
                  floor muscles are responsible for supporting the uterus,
                  bladder, bowl, and rectum. Strengthening these muscles has
                  positive impact for both men and women. It can help with:
                </p>
                <ul>
                  <li>
                    Leaking or Dribbling Urine during normal activities (Urine
                    Incontinence).
                  </li>
                  <li>Prevent leaking urine after childbirth.</li>
                  <li>Increase sensitivity during sex and stronger orgasms.</li>
                  <li>Potential to help with Erectile dysfunction.</li>
                </ul>
                <h5>How to do Kegel exercises</h5>
                <p>To get started:</p>
                <ul>
                  <li>
                    <span class="gilroyHeavy">Find the right muscles.</span> To
                    identify your pelvic floor muscles, stop urination in
                    midstream. Once you've identified your pelvic floor muscles
                    you can do the exercises in any position, although you might
                    find it easiest to do them lying down at first.
                  </li>
                  <li>
                    <span class="gilroyHeavy">Perfect your technique.</span> To
                    do Kegels, imagine you are sitting on a marble and tighten
                    your pelvic muscles as if you're lifting the marble. Try it
                    for three seconds at a time, then relax for a count of
                    three.
                  </li>
                  <li>
                    <span class="gilroyHeavy">Maintain your focus.</span> For
                    best results, focus on tightening only your pelvic floor
                    muscles. Be careful not to flex the muscles in your abdomen,
                    thighs or buttocks. Avoid holding your breath. Instead,
                    breathe freely during the exercises.
                  </li>
                  <li>
                    <span class="gilroyHeavy">Repeat three times a day.</span>{" "}
                    Aim for at least three sets of 10 to 15 repetitions a day
                    (both fast and slow).
                  </li>
                </ul>
                <h5>How to Use Bloomia?</h5>
                <p>
                  Bloomia is designed to be easy to use. Kegel exercises
                  typically follow a process like:
                </p>
                <ul>
                  <li>Squeeze your pelvic floor muscles for X seconds</li>
                  <li>Rest for X seconds</li>
                  <li>Repeat Y number of times</li>
                </ul>
                <p>
                  With Bloomia, we follow the same process but we make sure the
                  exercises contain long squeezes and short squeezes which
                  should help you.
                </p>
                <h5>How to Select a Workout?</h5>
                <p>
                  Bloomia recommends starting with the beginner workout and
                  increasing the repetitions and length as you strengthen your
                  pelvic floor. The most important thing is consistency. Focus
                  on completing your Kegels each day and keeping track of your
                  progress!
                </p>
                <h5>Something is not working as expected</h5>
                <p>Let us know about it by emailing admin@bloomia.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;
