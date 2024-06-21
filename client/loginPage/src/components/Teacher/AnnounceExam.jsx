import React, { useState } from 'react';
import '../../styles/AnnounceExamStyle.css';
import TeacherPage from './TeacherPage';
import { createAnnouncement } from '../../bridge/createAnnouncemet';



function AnnounceExam() {
  const [exam, setExam] = useState({ title: '', description: '', year: '', date: '', time: '' });
  const [scheduledExams, setScheduledExams] = useState([]);

  const handleChange = (e) => {
    setExam({ ...exam, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAnnouncement(exam.title, exam.description, exam.date, exam.time);
      alert("Exam scheduled successfully");
    }
    catch (error) {
      alert("Error scheduling exam");
    }

    setExam({ title: '', description: '', date: '', time: '' }); // reset form
  };

  return (
    <>
    <TeacherPage />
    <div className="announce-exam">
        <div className="form-card">
            <form onSubmit={handleSubmit}>
                <label className="form-label">
                Title:
                <input type="text" name="title" onChange={handleChange} className="form-input" />
                </label>
                <label className="form-label">
                Description:
                <textarea type="text" name="description" onChange={handleChange} className="form-input" />
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
    </>
  );
}

export default AnnounceExam;