const quill = new Quill(".descriptions", {
  theme: "snow",
});

const hamburgerIcon = document.querySelector("#hamburger__icon");
const svgIcon = document.querySelectorAll(".circle_hide");
const navMenu = document.querySelector("#nav__menu");

const toggleMenu = () => {
  navMenu.classList.toggle("active");
  document.querySelector("#svg__icon").classList.toggle("active");
  svgIcon.forEach((cr) => {
    cr.classList.toggle("active");
  });
};

const closeMenu = (e) => {
  if (!navMenu.contains(e.target) && !hamburgerIcon.contains(e.target)) {
    navMenu.classList.remove("active");
    document.querySelector("#svg__icon").classList.remove("active");

    svgIcon.forEach((cr) => {
      cr.classList.remove("active");
    });
  }
};

hamburgerIcon.addEventListener("click", toggleMenu);
window.addEventListener("click", closeMenu);

let resumeArr = [];

const resumeData = () => {
  resumeArr = [];

  const personalDetails = {
    jobTitle: document.getElementById("job__title").value,
    firstName: document.getElementById("first__name").value,
    lastName: document.getElementById("last__name").value,
    email: document.getElementById("input__email").value,
    website: document.getElementById("input__website").value,
    phone: document.getElementById("input__phone").value,
    addresse: document.getElementById("input__addresse").value,
    linkedin: document.getElementById("input__linkedin").value,
  };

  const Summary = {
    description: document.querySelector("#textarea__summary").value,
  };

  const experiences = [];
  document
    .querySelectorAll("#experiences__list .experience__card")
    .forEach((experience) => {
      const experienceObj = {
        jobTitle: experience.querySelector("[name='job__title-ex']").value,
        employer: experience.querySelector("[name='employer__name']").value,
        startDateMonth: experience
          .querySelector("[name='exp__start-month']")
          .value.substring(0, 3),
        startDateYear: experience.querySelector("[name='exp__start-year']")
          .value,
        endDateMonth: experience
          .querySelector("[name='exp__end-month']")
          .value.substring(0, 3),
        endDateYear: experience.querySelector("[name='exp__end-year']").value,
        city: experience.querySelector("[name='input__city-ex']").value,
        description: quill.root.innerHTML,
      };
      experiences.push(experienceObj);
    });

  const educations = [];
  document
    .querySelectorAll("#educations__list .ecucation__card")
    .forEach((education) => {
      const educationObj = {
        school: education.querySelector("[name='school__name']").value,
        degree: education.querySelector("[name='school__degree']").value,
        startDateMonth: education
          .querySelector("[name='education__start-month']")
          .value.substring(0, 3),
        startDateYear: education.querySelector("[name='education__start-year']")
          .value,
        endDateMonth: education
          .querySelector("[name='education__end-month']")
          .value.substring(0, 3),
        endDateYear: education.querySelector("[name='education__end-year']")
          .value,
        city: education.querySelector("[name='input__city-school']").value,
      };
      educations.push(educationObj);
    });

  const skills = [];
  document.querySelectorAll("#skills__list .skill__card").forEach((skill) => {
    const skillObj = {
      skill: skill.querySelector("[name='skill__name']").value,
      // level: skill.querySelector("[name='skill__level']").value,
    };
    skills.push(skillObj);
  });

  const courses = [];
  document
    .querySelectorAll("#courses__list .course__card")
    .forEach((course) => {
      const courseObj = {
        course: course.querySelector("[name='course__title']").value,
        institution: course.querySelector("[name='course__institution']").value,
        startDateMonth: course
          .querySelector("[name='course__start-month']")
          .value.substring(0, 3),
        startDateYear: course.querySelector("[name='course__start-year']")
          .value,
        endDateMonth: course
          .querySelector("[name='course__end-month']")
          .value.substring(0, 3),
        endDateYear: course.querySelector("[name='course__end-year']").value,
      };
      courses.push(courseObj);
    });

  const languages = [];
  document
    .querySelectorAll("#languages__list .language__card")
    .forEach((language) => {
      const languageObj = {
        language: language.querySelector("[name='language__name']").value,
        level: language.querySelector("[name='language__level']").value,
      };
      languages.push(languageObj);
    });

  resumeArr = [
    personalDetails,
    Summary,
    experiences,
    educations,
    skills,
    courses,
    languages,
  ];
  preview();
  console.log(resumeArr);
};

document.querySelectorAll("input, textarea").forEach((inputField) => {
  inputField.addEventListener("input", () => {
    resumeData();
    console.log(resumeArr);
  });
});

// editors.forEach((quill) => {
//   quill.on("text-change", () => {
//     resumeData();
//     preview();
//   });
// });

function preview() {
  const [
    personalDetails,
    summary,
    experiences,
    educations,
    skills,
    courses,
    languages,
  ] = resumeArr;

  document.querySelector(".resume__container").innerHTML = `
    <div class="preview__section h-full flex bg-white">
      <div class="resume__side h-full w-1/3 bg-[#082a4d] p-4 flex flex-col gap-2">
        <div class="pic w-full h-28 bg-white p-1">
          <div class="w-full h-full bg-[#5c6477] overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
              alt="Profile Picture"
            />
          </div>
        </div>
        <div class="contact leading-none pt-2">
          <span class="section-name leading-normal text-[10px] font-medium uppercase text-white">Personal Details</span>
          <ul class="mt-2 flex flex-col gap-1.5">
          <li class="text-[8px] text-gray-200">${personalDetails.email}</li>
            <li class="text-[8px] text-gray-200">${personalDetails.phone}</li>
            <li class="text-[8px] text-gray-200">${
              personalDetails.addresse
            }</li>
            <li class="text-[8px] text-gray-200">${
              personalDetails.linkedin
            }</li>
            <li class="text-[8px] text-gray-200">${personalDetails.website}</li>
          </ul>
        </div>
        <div class="skills leading-none">
          <span class="section-name leading-normal text-[10px] font-medium uppercase text-white">Skills</span>
          <ul class="mt-2 flex flex-col gap-1.5">
            ${skills
              .map(
                (skill) =>
                  `<li class="text-[8px] text-gray-200">${skill.skill}</li>`
              )
              .join("")}
          </ul>
        </div>
        <div class="languages leading-none">
          <span class="section-name leading-normal text-[10px] font-medium uppercase text-white">Languages</span>
          <ul class="mt-2 flex flex-col gap-1.5">
            ${languages
              .map(
                (language) =>
                  `<li class="text-[8px] text-gray-200">${language.language} | ${language.level}</li>`
              )
              .join("")}
          </ul>
        </div>
      </div>
      <div class="w-2/3 p-4 leading-normal flex flex-col gap-1.5">
        <div class="full-name leading-normal py-3">
          <div class="uppercase text-xl font-bold text-[#082a4d]">
            <span>${personalDetails.firstName}</span>
            <span class="font-medium">${personalDetails.lastName}</span>
          </div>
          <div class="text-sm font-medium leading-normal text-gray-500 capitalize">${
            personalDetails.jobTitle
          }</div>
        </div>
        <div class="summary">
          <div class="prev__section-title leading-4 text-[10px] font-bold uppercase text-gray-700 border-b-2 border-gray-400">
            Professional Summary
          </div>
          <div class="w_full max-w-full text-[8px] text-gray-700">${
            summary.description
          }</div>
        </div>
        <div class="experience">
          <div class="prev__section-title leading-4 text-[10px] font-bold uppercase text-gray-700 border-b-2 border-gray-400">
            Professional Experience
          </div>
          <div class="cv__experiences-list flex flex-col gap-1">
            ${experiences
              .map(
                (exp) => `
              <div class="leading-4">
                <div class="flex justify-between items-center gap-3">
                  <span class="text-[8px] font-medium text-gray-800">${exp.jobTitle}</span>
                  <span class="text-[8px] font-medium text-gray-800">${exp.startDateMonth} ${exp.startDateYear} - ${exp.endDateMonth} ${exp.endDateYear}</span>
                </div>
                <div class="text-[8px] text-gray-700">${exp.description}</div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
        <div class="education">
          <div class="prev__section-title leading-4 text-[10px] font-bold uppercase text-gray-700 border-b-2 border-gray-400">
            Education
          </div>
          <div class="cv__education-list flex flex-col gap-1">
            ${educations
              .map(
                (edu) => `
              <div class="leading-4">
                <div class="flex justify-between items-center gap-3 leading-normal">
                  <span class="text-[8px] font-medium text-gray-800">${edu.degree}</span>
                  <span class="text-[8px] font-medium text-gray-800">${edu.startDateMonth} ${edu.startDateYear} - ${edu.endDateMonth} ${edu.endDateYear}</span>
                </div>
                <div class="text-[8px] text-gray-700 leading-normal flex"><p class="font-medium mr-0.5">${edu.school}</p><p>,${edu.city}</p></div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
        <div class="courses">
          <div class="prev__section-title leading-4 text-[10px] font-bold uppercase text-gray-700 border-b-2 border-gray-400">
            Certificates & Courses
          </div>
          <div class="flex flex-col gap-1">
            ${courses
              .map(
                (course) => `
              <div class="leading-4">
                <div class="flex justify-between items-center gap-3">
                  <span class="text-[8px] text-gray-800 font-medium">${course.course}</span>
                  <span class="text-[8px] text-gray-800 font-medium">${course.startDateMonth} ${course.startDateYear} - ${course.endDateMonth} ${course.endDateYear}</span>
                </div>
                <div class="text-[8px] text-gray-700">${course.institution}</div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  `;
}

// dynamic forms




// experience dynamic form
const experiencesList = document.querySelector("#experiences__list");
let experienceForm = document.querySelector(".experience__card");
const addExpBtn = document.querySelector("#add__experience-btn");

addExpBtn.addEventListener("click", () => {
  let newExperienceForm = experienceForm.cloneNode(true);
  let newDiv = document.createElement("div");
  newDiv.classList.add("section__delete-btn");
  newDiv.innerHTML = `
  <i class="fa-regular fa-trash-can text-xl text-[#c6cbd8]"></i>
  `;
  experiencesList.appendChild(newExperienceForm);
  newExperienceForm.appendChild(newDiv);
  // hide all inputs card
  experiencesList.querySelectorAll(".hide__section").forEach((card) => {
    card.classList.add("active");
    // const rotateIcon = experienceForm.querySelectorAll(".section__card-header i");
    // rotateIcon.forEach((icon) => {

    //   icon.classList.toggle("active")
    // })
  });
  // show the new input card
  const hideSection = newExperienceForm.querySelector(".hide__section")
  hideSection.classList.remove("active");
  // clear the new form fields values
  const inputs = newExperienceForm.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));
  // clear the new section quill editor content
  newExperienceForm.querySelector(".ql-editor").innerHTML = "";
  // delete the children
  newDiv.addEventListener("click", () => {
    experiencesList.removeChild(newExperienceForm);
  });

  
  // show the section content 
  let allSection = document.querySelectorAll(".experience__card");

  allSection.forEach((section) => {
    section.addEventListener("click", () => {
      const toggleSection = section.querySelector(".hide__section")
      toggleSection.classList.toggle("active");
      const rotateIcon = section.querySelector(".section__card-header i");
      rotateIcon.classList.toggle("active")
    })
  })
});

// education dynamic form

const educationsList = document.querySelector("#educations__list");
let educationeForm = document.querySelector(".ecucation__card");
const addEducationBtn = document.querySelector("#add__education-btn");

addEducationBtn.addEventListener("click", () => {
  let newEducationForm = educationeForm.cloneNode(true);
  let newDiv = document.createElement("div");
  newDiv.classList.add("section__delete-btn");
  newDiv.innerHTML = `
  <i class="fa-regular fa-trash-can text-xl text-[#c6cbd8]"></i>
  `;
  educationsList.appendChild(newEducationForm);
  newEducationForm.appendChild(newDiv);

  // hide all inputs card
  educationsList.querySelectorAll(".hide__section").forEach((card) => {
    card.classList.add("active");
  });
  // show the new input card
  newEducationForm.querySelector(".hide__section").classList.remove("active");
    // clear the new form fields values
  const inputs = newEducationForm.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));
  // delete the children
  newDiv.addEventListener("click", () => {
    educationsList.removeChild(newEducationForm);
  });
});

// skills dynamic form

const skillsList = document.querySelector("#skills__list");
let skillForm = document.querySelector(".skill__card");
const addSkillBtn = document.querySelector("#add__skill-btn");

addSkillBtn.addEventListener("click", () => {
  let newSkillForm = skillForm.cloneNode(true);
  let newDiv = document.createElement("div");
  newDiv.classList.add("section__delete-btn");
  newDiv.innerHTML = `
  <i class="fa-regular fa-trash-can text-xl text-[#c6cbd8]"></i>
  `;
  skillsList.appendChild(newSkillForm);
  newSkillForm.appendChild(newDiv);
  const inputs = newSkillForm.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));
  newDiv.addEventListener("click", () => {
    skillsList.removeChild(newSkillForm);
  });
});

// courses dynamic form

const coursesList = document.querySelector("#courses__list");
let courseForm = document.querySelector(".course__card");
const addCourseBtn = document.querySelector("#add__course-btn");

addCourseBtn.addEventListener("click", () => {
  let newCourseForm = courseForm.cloneNode(true);
  let newDiv = document.createElement("div");
  newDiv.classList.add("section__delete-btn");
  newDiv.innerHTML = `
  <i class="fa-regular fa-trash-can text-xl text-[#c6cbd8]"></i>
  `;
  coursesList.appendChild(newCourseForm);
  newCourseForm.appendChild(newDiv);
  const inputs = newCourseForm.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));

  newDiv.addEventListener("click", () => {
    coursesList.removeChild(newCourseForm);
  });
});

// languages dynamic form

const languagesList = document.querySelector("#languages__list");
let languageForm = document.querySelector(".language__card");
const addLanguageBtn = document.querySelector("#add__language-card");

addLanguageBtn.addEventListener("click", () => {
  let newLanguageForm = languageForm.cloneNode(true);
  let newDiv = document.createElement("div");
  newDiv.classList.add("section__delete-btn");
  newDiv.innerHTML = `
  <i class="fa-regular fa-trash-can text-xl text-[#c6cbd8]"></i>
  `;
  languagesList.appendChild(newLanguageForm);
  newLanguageForm.appendChild(newDiv);
  const inputs = newLanguageForm.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));
  newDiv.addEventListener("click", () => {
    languagesList.removeChild(newLanguageForm);
  });
});
