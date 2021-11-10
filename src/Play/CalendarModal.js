import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
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
                <div className="mt-3 mb-3">
                  <div className="bg-grey pb-4">
                    <Calendar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;
