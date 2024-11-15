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
    `;
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

  document.querySelector(".cv__experiences-list").innerHTML = "";
  experiences.forEach((experience, index) => {
    document.querySelector(".cv__experiences-list").innerHTML += `
       <div class="leading-4">
                    <div
                      class="flex justify-between items-center gap-3 leading-4"
                    >
                      <div class="">
                        <span class="text-[8px] text-gray-800 font-medium"
                          >${experience.jobTitle}</span
                        >
                      </div>
                      <div class="">
                        <span class="text-[8px] text-gray-800 font-medium"
                          >${experience.startDateMonth}  ${experience.startDateYear} - ${experience.endDateMonth} ${experience.endDateYear}</span
                        >
                      </div>
                    </div>
                    <div class="">
                      <div class="text-[8px] text-[gray-700]#">
                        ${experience.description}
                      </div>
                    </div>
                  </div>
    `;
  });

  document.querySelector(".cv__education-list").innerHTML = "";
  educations.forEach((education) => {
    document.querySelector(".cv__education-list").innerHTML += `
       <div class="leading-4">
                    <div
                      class="flex justify-between items-center gap-3 leading-4"
                    >
                      <div class="">
                        <span class="text-[8px] text-gray-800 font-medium"
                          >${education.school}</span
                        >
                      </div>
                      <div class="">
                        <span class="text-[8px] text-gray-800 font-medium"
                          >Sep 2024 - Present</span
                        >
                      </div>
                    </div>
                    <div class="">
                      <div class="text-[8px] text-gray-700 leading-normal">
                      ${education.description}
                      </div>
                    </div>
                  </div>
    `;
  });
















  <div class="previwe__section flex bg-white">
          <div
            class="resume__side h-full w-1/3 bg-[#082a4d] p-4 flex flex-col gap-2"
          >
            <div class="pic w-full h-28 bg-white p-1">
              <div class="w-full h-full bg-[#5c6477] overflow-hidden">
                <img
                  class="w-full h-full object-cover"
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="pic"
                />
              </div>
            </div>
            <div class="contact leading-none pt-2"></div>
            <div class="skills leading-none">
              <span
                class="section-name leading-normal text-[10px] font-medium uppercase text-white"
                >skills</span
              >
              <ul class="mt-2 flex flex-col gap-1.5">
                <li class="text-[8px] text-gray-200">html</li>
                <li class="text-[8px] text-gray-200">css</li>
                <li class="text-[8px] text-gray-200">JavaScript</li>
                <li class="text-[8px] text-gray-200">Tailwind</li>
                <li class="text-[8px] text-gray-200">GSAP</li>
                <li class="text-[8px] text-gray-200">Axios</li>
                <li class="text-[8px] text-gray-200">CI/CD</li>
                <li class="text-[8px] text-gray-200">Php</li>
                <li class="text-[8px] text-gray-200">SQL</li>
              </ul>
            </div>
            <div class="languages leading-none">
              <span
                class="section-name leading-normal text-[10px] font-medium uppercase text-white"
                >Languages</span
              >
              <ul class="mt-2 flex flex-col gap-1.5">
                <li class="text-[8px] text-gray-200">Arabic | Native</li>
                <li class="text-[8px] text-gray-200">English | Fluent</li>
                <li class="text-[8px] text-gray-200">French | Intermediate</li>
                <li class="text-[8px] text-gray-200">Germany | Basic</li>
              </ul>
            </div>
            <div class="Interests leading-none">
              <span
                class="section-name leading-normal text-[10px] font-medium uppercase text-white"
                >Interests</span
              >
              <ul class="mt-2 flex flex-col gap-1.5">
                <li class="text-[8px] text-gray-200">Coding</li>
                <li class="text-[8px] text-gray-200">Sport</li>
                <li class="text-[8px] text-gray-200">Swimming</li>
                <li class="text-[8px] text-gray-200">Learning</li>
              </ul>
            </div>
          </div>
          <div class="w-2/3 p-4 leading-normal">
            <div class="full-name leading-4 py-3"></div>
            <div class="flex flex-col gap-2 mt-4">
              <div class="summary" id="summary__section"></div>
              <div class="experience" id="experience__section">
                <div
                  class="prev__section-title leading-4 text-[10px] font-bold uppercase text-gray-700 border-b-2 border-gray-400"
                >
                  professional experience
                </div>
                <div class="cv__experiences-list flex flex-col gap-1"></div>
              </div>
              <div class="education">
                <div
                  class="prev__section-title leading-4 text-[10px] font-bold uppercase text-gray-700 border-b-2 border-gray-400"
                >
                  Education
                </div>
                <div class="cv__education-list flex flex-col gap-0.5"></div>
              </div>
              <div class="courses">
                <div
                  class="prev__section-title leading-4 text-[10px] font-bold uppercase text-gray-700 border-b-2 border-gray-400"
                >
                  Certificats & Courses
                </div>
                <div class="flex flex-col gap-0.5">
                  <div class="leading-4">
                    <div
                      class="flex justify-between items-center gap-3 leading-4"
                    >
                      <div class="">
                        <span class="text-[8px] text-gray-800 font-medium"
                          >DevOps Course</span
                        >
                      </div>
                      <div class="">
                        <span class="text-[8px] text-gray-800 font-medium"
                          >Oct 2024 - Present</span
                        >
                      </div>
                    </div>
                    <div class="">
                      <div class="">
                        <p class="text-[8px] text-gray-700 leading-normal">
                          Étudiant en DevOps sur Udemy, avec apprentissage de
                          CI/CD et de l'automatisation via Docker, Kubernetes,
                          Jenkins, et Git pour optimiser le développement et les
                          déploiements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



























        
<div class="">
<div class="grid grid-cols-1 sm:grid-cols-1 gap-4">
  <div class="grid grid-cols-2 gap-5">
    <div class="flex flex-col">
      <h3>Start Month</h3>
      <select
        name="exp__start-month"
        id="exp__start-month"
      >
        <option disabled selected>MM</option>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
    </div>
    <div class="flex flex-col">
      <h3>Start Year</h3>
      <input type="text" name="exp__start-year" id="exp__start-year" placeholder="YYYY"/>
    </div>
  </div>
  <div class="">
    <div class="grid grid-cols-2 gap-5">
      <div class="flex flex-col">
        <h3>End Month</h3>
        <select
          name="exp__end-month"
          id="exp__end-month"
        >
          <option disabled selected>MM</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>
      <div class="flex flex-col">
        <h3 for="">End Year</h3>
        <input type="text" name="exp__end-year" id="exp__end-year" placeholder="YYYY" />
      </div>
    </div>
  </div>
</div>
</div>