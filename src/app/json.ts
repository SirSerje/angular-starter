export const json = {
  logoPosition: "right",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "1.1Panel",
          title: "1.1",
          state: "expanded",
          elements: [
            {
              type: "dropdown",
              name: "20eb23ce-6316-43fa-8e7a-6eaee7d5b615",
              title: "In which language are you submitting your response?",
              description:
                "Please note that CDP only considers responses submitted in English, Latin American Spanish, Brazilian Portuguese, Japanese or Chinese for scoring. Please check with your local CDP office.",
              isRequired: true,
              choices: [
                {
                  value: "9416cc2e-9aff-4d18-b7df-68c4dadd0312",
                  text: "English",
                },
                {
                  value: "68a11cd1-2c08-4cf8-9e42-8586fa9dd086",
                  text: "Latin American Spanish",
                },
                {
                  value: "00c28076-49bb-48ee-81bc-960ce992a3fb",
                  text: "Brazilian Portuguese",
                },
                {
                  value: "4142b7a9-d315-42b0-b806-8338d445a5b3",
                  text: "Japanese",
                },
                {
                  value: "0ad0513b-9be7-4cff-b275-33b753e2455b",
                  text: "Chinese",
                },
                {
                  value: "f7a461e2-fc92-471b-8eda-806ef364c266",
                  text: "Other, please specify",
                },
              ],
              allowClear: false,
            },
            {
              type: "comment",
              name: "f7a461e2-fc92-471b-8eda-806ef364c2661.1",
              useDisplayValuesInDynamicTexts: false,
              visibleIf:
                "{20eb23ce-6316-43fa-8e7a-6eaee7d5b615} = 'f7a461e2-fc92-471b-8eda-806ef364c266'",
              startWithNewLine: false,
              title: "Other, please specify",
              hideNumber: true,
              isRequired: true,
              maxLength: 0,
              rows: 0,
            },
          ],
        },
      ],
    },
  ],
};
