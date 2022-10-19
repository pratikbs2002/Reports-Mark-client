import React, { useRef } from "react";
import "./ResultFront.css";
import ReactToPrint from 'react-to-print'

const data = {
  standard: 1,
  division: "A",
  schoolName: "Kanya Shala Khergam",
  taluka: "Khergam",
  district: "Khergam",
  surName: "Thumber",
  studentName: "Isha",
  fatherName: "fatherbhai",
  motherName: "motherben",
  grNumber: 12123,
  uidNumber: 123232131312333,
  birthDate: "12/12/2012",
  phoneNumber: 989898989912,
  address: "moon, near earth",
};
export default function ResultFront() {
  const componentRef = useRef();

  return (
    <>
      <ReactToPrint
        trigger={() => <button className="resultFrontBtnPrint">Print/Download</button>}
        content={() => componentRef.current}
      />
      <div className="resultFrontMainWrap">

        <main className="resultFrontMain" ref={componentRef}>
          {/* header */}
          <header className="resultFrontHeader">
            <h1>Progress Report</h1>
          </header>

          {/* class details */}
          <section>
            <div className="resultFrontClassDetail mt15">
              <div className="reportFrontStandardDetails">
                <div className="resultFrontFlexContainer flex-1">
                  <span className="resultFrontSpanTitle">Standard: </span>{" "}
                  <p className="resutlFrontData flex-1">{data.standard}</p>
                </div>
                <div className="resultFrontFlexContainer flex-1">
                  <span className="resultFrontSpanTitle">Division: </span>
                  <p className="resutlFrontData flex-1">{data.division}</p>
                </div>
              </div>
              <div className="mt15 reportFrontAcademicYear ">
                <span className="resultFrontSpanTitle">Academic Year:</span>{" "}
                <p className="resutlFrontData">
                  20 &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp; 20
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </p>
              </div>
            </div>
          </section>

          {/* school details */}
          <section>
            <div className="resultFrontFlexContainer flex-1 mt25">
              <span className="resultFrontSpanTitle ">Name of School: </span>
              <p className="resutlFrontData flex-1">{data.schoolName}</p>
            </div>
            <div className="resultFrontSchoolAddr mt15">
              <div className="resultFrontFlexContainer flex-1">
                <span className="resultFrontSpanTitle">Taluka: </span>
                <p className="resutlFrontData flex-1">{data.taluka}</p>
              </div>
              <div className="resultFrontFlexContainer flex-1">
                <span className="resultFrontSpanTitle">District</span>
                <p className="resutlFrontData flex-1">{data.district}</p>
              </div>
            </div>
          </section>

          {/* student details */}
          <section>
            <div className="mt25 resultFrontFlexContainer flex-1">
              <span className="resultFrontSpanTitle">Name:</span>
              <p className="resutlFrontData flex-1">
                {data.surName}&nbsp;&nbsp;&nbsp;{data.studentName}
                &nbsp;&nbsp;&nbsp;{data.fatherName}
              </p>
            </div>
            <div className="resultFrontNameInfo">
              <span>&nbsp;</span>
              <span className="resultFrontSpanTitleNameInfo">(Surname)</span>
              <span className="resultFrontSpanTitleNameInfo">
                (Student's Name)
              </span>
              <span className="resultFrontSpanTitleNameInfo">
                (Father's Name)
              </span>
              <span>&nbsp;</span>
            </div>
            <div className="mt15 resultFrontFlexContainer flex-1">
              <span className="resultFrontSpanTitle">Address:</span>
              <p className="resutlFrontData flex-1">{data.address}</p>
            </div>
            <div className="resultFrontAddressLine2 mt10 resultFrontFlexContainer flex-1">
              <span className="resultFrontSpanTitle"></span>
              <p className="resutlFrontData flex-1">&nbsp;</p>
            </div>
            <div className="mt15 resultFrontFlexContainer flex-1">
              <span className="resultFrontSpanTitle">Father's Name:</span>
              <p className="resutlFrontData flex-1">{data.fatherName}</p>
            </div>
            <div className="mt15 resultFrontFlexContainer flex-1">
              <span className="resultFrontSpanTitle">Mother's Name:</span>
              <p className="resutlFrontData flex-1">{data.motherName}</p>
            </div>
            <div className="resultFrontId">
              <div className="mt15 resultFrontFlexContainer flex-1">
                <span className="resultFrontSpanTitle">GR. Number:</span>
                <p className="resutlFrontData flex-1">{data.grNumber}</p>
              </div>
              <div className="mt15 resultFrontFlexContainer flex-1">
                <span className="resultFrontSpanTitle">UID. Number:</span>
                <p className="resutlFrontData flex-1">{data.uidNumber}</p>
              </div>
            </div>
            <div className="resultFrontPersonalInfo">
              <div className="mt15 resultFrontFlexContainer flex-1">
                <span className="resultFrontSpanTitle">Date of Birth:</span>
                <p className="resutlFrontData flex-1">{data.birthDate}</p>
              </div>
              <div className="mt15 resultFrontFlexContainer flex-1">
                <span className="resultFrontSpanTitle">Contact Number</span>
                <p className="resutlFrontData flex-1">{data.phoneNumber}</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
