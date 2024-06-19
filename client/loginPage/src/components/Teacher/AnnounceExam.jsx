import React, { useState } from 'react';
import '../../styles/AnnounceExamStyle.css';

function AnnounceExam() {
  const [exam, setExam] = useState({ course: '', year: '', semester: '', date: '', time: '' });
  const [scheduledExams, setScheduledExams] = useState([]);

  const handleChange = (e) => {
    setExam({ ...exam, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setScheduledExams([...scheduledExams, exam]);
    setExam({ course: '', year: '', semester: '', date: '', time: '' }); // reset form
  };

  return (
    <div className="announce-exam">
        <div className="form-card">
            <form onSubmit={handleSubmit}>
                <label className="form-label">
                Course:
                <input type="text" name="course" onChange={handleChange} className="form-input" />
                </label>
                <label className="form-label">
                Year:
                <input type="text" name="year" onChange={handleChange} className="form-input" />
                </label>
                <label className="form-label">
                Semester:
                {/* <input type="" name="semester" onChange={handleChange} className="form-input" /> */}
                <div className="form-input">
                    <label className="radio-label">
                    <input type="radio" name="semester" value="1" onChange={handleChange} />
                    I
                    </label>
                    <label className="radio-label">
                    <input type="radio" name="semester" value="2" onChange={handleChange} />
                    II
                    </label>
                </div>
                </label>
                <label className="form-label">
                Date:
                <input type="date" name="date" onChange={handleChange} className="form-input" />
                </label>
                <label className="form-label">
                Time:
                <input type="time" name="time" onChange={handleChange} className="form-input" />
                </label>
                <button type="submit" className="submit-button">Schedule Exam</button>
            </form>
        </div>
      {scheduledExams.map((scheduledExam, index) => (
        <div key={index} className="exam-card">
          <h2 className="exam-course">{scheduledExam.course}</h2>
          <p className="exam-detail">Year: {scheduledExam.year}</p>
          <p className="exam-detail">Semester: {scheduledExam.semester}</p>
          <p className="exam-detail">Date: {scheduledExam.date}</p>
          <p className="exam-detail">Time: {scheduledExam.time}</p>
        </div>
      ))}
    </div>
  );
}

export default AnnounceExam;