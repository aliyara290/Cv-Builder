const editors = [];
document.querySelectorAll(".descriptions").forEach((element) => {
  const quill = new Quill(element, { theme: "snow" });
  editors.push(quill);
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
    description: editors[0] ? editors[0].root.innerHTML : "",
  };

  const experiences = [];
  document
    .querySelectorAll("#experiences__list .experience__card")
    .forEach((experience) => {
      const experienceObj = {
        jobTitle: experience.querySelector("[name='job__title-ex']").value,
        employer: experience.querySelector("[name='employer__name']").value,
        startDate: experience.querySelector("[name='experience__date-start']")
          .value,
        endDate: experience.querySelector("[name='experience__date-end']")
          .value,
        city: experience.querySelector("[name='input__city-ex']").value,
        description: editors[1] ? editors[1].root.innerHTML : "",
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
        startDate: education.querySelector("[name='school__date-start']").value,
        endDate: education.querySelector("[name='school__date-end']").value,
        city: education.querySelector("[name='input__city-school']").value,
        description: editors[2] ? editors[2].root.innerHTML : "",
      };
      educations.push(educationObj);
    });

  const skills = [];
  document.querySelectorAll("#skills__list .skill__card").forEach((skill) => {
    const skillObj = {
      skill: skill.querySelector("[name='skill__name']").value,
      level: skill.querySelector("[name='skill__level']").value,
    };
    skills.push(skillObj);
  });

  const courses = [];
  document
    .querySelectorAll("#courses__list .course__card")
    .forEach((course) => {
      const courseObj = {
        course: course.querySelector("[name='course__name']").value,
        institution: course.querySelector("[name='course__institution']").value,
        startDate: course.querySelector("[name='course__date-start']").value,
        endDate: course.querySelector("[name='course__date-end']").value,
      };
      courses.push(courseObj);
    });

  const languages = [];
  document
    .querySelectorAll("#languages__list .languages__card")
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
};

document.querySelectorAll("input, textarea").forEach((inputField) => {
  inputField.addEventListener("input", () => {
    resumeData();
    preview();
  });
});

editors.forEach((quill) => {
  quill.on("text-change", () => {
    resumeData();
    preview();
  });
});

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

  if (personalDetails) {
    document.querySelector(".full-name").innerHTML = `
      <div class="uppercase text-xl font-bold text-[#082a4d]">
                <span id="user__firstname">${personalDetails.firstName}</span>
                <span class="font-medium" id="user__lastname">${personalDetails.lastName}</span>
              </div>
              <div
                class="text-sm font-medium text-gray-500"
                id="user__job-title"
              >
              ${personalDetails.jobTitle}
              </div>
    `
    document.querySelector(".contact").innerHTML = `
       <span
                class="section-name leading-normal text-[10px] font-medium uppercase text-white"
                >Personal Details</span
              >
              <ul class="mt-2 flex flex-col gap-1.5">
                <li class="text-[8px] text-gray-200" id="user__phone">${personalDetails.phone}</li>
                <li class="text-[8px] text-gray-200" id="user__email">${personalDetails.email}</li>
                <li class="text-[8px] text-gray-200" id="user__addresse">${personalDetails.addresse}</li>
                <li class="text-[8px] text-gray-200" id="user__website">${personalDetails.website}</li>
                <li class="text-[8px] text-gray-200" id="user__linkedin">${personalDetails.linkedin}</li>
              </ul>
    `;
  }

  if (summary.description !== "") {
    document.querySelector("#summary__section").innerHTML = `
      <div
                  class=" prev__section-title leading-4 mb-1 text-[10px] font-bold uppercase text-gray-700 border-b-2 border-gray-400"
                >
                  Professional Summary
                </div>
                <div class="w_full max-w-full text-[8px] text-gray-700" id="Professional__summary">
                ${summary.description}
                </div>
      
    `;
  }
}
