import React, { useState } from "react";

const Form = ({ handleTabClick }) => {
  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  const addQuestion = () => {
    setAdditionalQuestions([
      ...additionalQuestions,
      { id: Date.now(), question: "", required: true, hidden: false },
    ]);
  };

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...additionalQuestions];
    newQuestions[index][field] = value;
    setAdditionalQuestions(newQuestions);
  };

  return (
    <div className="p-8 space-y-6">
      <h2 className="text-xl font-bold mb-4">Application Form</h2>
      <p className="mb-4">
        Here's where you can edit which fields appear on this job's application
        form and if they are required or not. You can further customize the
        application form by adding additional questions.
      </p>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Information</h3>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-semibold">Name (Always required)</label>
          <input
            type="text"
            className="py-2 px-4 border border-gray-300 rounded-md"
            disabled
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-semibold">Email address (Always required)</label>
          <input
            type="email"
            className="py-2 px-4 border border-gray-300 rounded-md"
            disabled
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-semibold">Phone</label>
          <select
            value={additionalQuestions.find((q) => q.id === "phone")?.hidden}
            onChange={(e) =>
              handleQuestionChange(index, "hidden", e.target.value === "true")
            }
            className="py-2 px-4 border border-gray-300 rounded-md"
          >
            <option value="false">Visible</option>
            <option value="true">Hidden</option>
          </select>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-semibold">Location</label>
          <select
            value={additionalQuestions.find((q) => q.id === "location")?.hidden}
            onChange={(e) =>
              handleQuestionChange(index, "hidden", e.target.value === "true")
            }
            className="py-2 px-4 border border-gray-300 rounded-md"
          >
            <option value="false">Visible</option>
            <option value="true">Hidden</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Links</h3>
        {["LinkedIn", "Twitter", "GitHub", "Dribbble", "Website URL"].map((link) => (
          <div key={link} className="flex flex-col space-y-2">
            <label className="text-sm font-semibold">{link} profile</label>
            <select
              value={additionalQuestions.find((q) => q.id === link.toLowerCase())?.visibility}
              onChange={(e) =>
                handleQuestionChange(
                  index,
                  "visibility",
                  e.target.value
                )
              }
              className="py-2 px-4 border border-gray-300 rounded-md"
            >
              <option value="visible">Visible</option>
              <option value="hidden">Hidden</option>
            </select>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">File Upload</h3>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-semibold">Resume (Required)</label>
          <input
            type="file"
            className="py-2 px-4 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Fields</h3>
        {additionalQuestions.map((q, index) => (
          <div key={q.id} className="flex flex-col space-y-2">
            <label className="text-sm font-semibold">
              Additional Question {index + 1}
            </label>
            <input
              type="text"
              value={q.question}
              onChange={(e) =>
                handleQuestionChange(index, "question", e.target.value)
              }
              className="py-2 px-4 border border-gray-300 rounded-md"
              placeholder="Enter your question"
            />
            <div className="flex space-x-4 mt-2">
              <div>
                <select
                  value={q.required ? "required" : "optional"}
                  onChange={(e) =>
                    handleQuestionChange(
                      index,
                      "required",
                      e.target.value === "required"
                    )
                  }
                  className="py-2 px-4 border border-gray-300 rounded-md"
                >
                  <option value="required">Required</option>
                  <option value="optional">Optional</option>
                </select>
              </div>
              <div>
                <select
                  value={q.hidden ? "hidden" : "visible"}
                  onChange={(e) =>
                    handleQuestionChange(
                      index,
                      "hidden",
                      e.target.value === "hidden"
                    )
                  }
                  className="py-2 px-4 border border-gray-300 rounded-md"
                >
                  <option value="visible">Visible</option>
                  <option value="hidden">Hidden</option>
                </select>
              </div>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addQuestion}
          className="py-2 px-4 border border-gray-300 rounded-md"
        >
          Add Additional Question
        </button>
      </div>
    </div>
  );
};

export default Form;
