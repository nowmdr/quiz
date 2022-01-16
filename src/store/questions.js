export default {
  state: {
    questions: [
      {
        title: "Select your gender",
        options: [
          {
            name: "Male",
            urlImg:
              "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/man-health-worker_1f468-200d-2695-fe0f.png",
          },
          {
            name: "Female",
            urlImg:
              "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/pregnant-woman_1f930.png",
          },
        ],
      },
      {
        title: "What is your age?",
        options: [
          {
            name: "20s",
            description: "18—29 years",
          },
          {
            name: "30s",
            description: "30—39 years",
          },
          {
            name: "40s",
            description: "40—49 years",
          },
          {
            name: "50+",
          },
        ],
      },
    ],
  },
  mutations:{},
  actions:{},
  getters:{ questions: s => s.questions}
};
