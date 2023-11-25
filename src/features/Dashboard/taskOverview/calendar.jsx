import { useState } from "react";
import { Calendar, DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const CalendarComp = () => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = (ranges) => {
    setSelectionRange({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
      key: "selection",
    });
  };

  return (
    <div className="w-1/2 p-4">
      <DateRange
        ranges={[selectionRange]}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        editableDateInputs={true}
        showMonthArrow={false}
        rangeColors={["#4318FF"]}
        showDateDisplay={false}
        className="w-[100%] text-[16px] items-center"
        calendar={<Calendar date={new Date()} className="w-[100%] " />}
      />
      <style>
        {`
            .rdrMonthAndYearWrapper{
              width: 100%
            }
            .rdrMonth, .rdrMonths{
              padding: 0;
              width: 100%
            }
            .rdrYearPicker select{
                color: #2B3674;
            }
            .rdrMonthPicker select{
                color: #4218ff;
            }
            .rdrMonthPicker, .rdrYearPicker, .rdrMonthAndYearPickers select{
                font-family: "DM Sans-Bold", Helvetica;
                font-size: 16px;
                font-weight: 700;
                letter-spacing: -0.28px;
                line-height: 24px;
            }
            .rdrWeekDays span{
                color: #2b3674;
                font-family: "DM Sans-Bold", Helvetica;
                font-size: 16px;
                font-weight: 700;
                letter-spacing: -0.28px;
                line-height: 24px;
                text-align: center;
            }
            .rdrDayNumber span{
                color: #2b3674;
                font-family: "DM Sans-Medium", Helvetica;
                font-size: 16px;
                font-weight: 500;
                letter-spacing: -0.24px;
                line-height: 20px;
                text-align: center;
            }
            .rdrDayToday .rdrDayNumber span:after {
                background: #4318FF;
            }
        `}
      </style>
    </div>
  );
};

export default CalendarComp;
