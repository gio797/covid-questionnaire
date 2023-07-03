export let user = {
  first_name: "",
  last_name: "",
  email: "",
  had_covid: "",
  had_antibody_test: null,
  antibodies: {
    test_date: "",
    number: null,
  },
  had_vaccine: null,
  vaccination_stage: "",
  non_formal_meetings: "",
  number_of_days_from_office: null,
  what_about_meetings_in_live: "",
  tell_us_your_opinion_about_us: "",
  i_am_waiting: "",
};

export let isLocal = false;

const localData = localStorage.getItem("user");

if (localData) {
  user = JSON.parse(localData);
  isLocal = true;
}

export const updateUser = (property, value) => {
  user[property] = value;
  localStorage.setItem("user", JSON.stringify(user));
  //   console.log(user);
};

export const updateUserAntibodies = (property, value) => {
  user.antibodies[property] = value;
  localStorage.setItem("user", JSON.stringify(user));
  //   console.log(user);
};
