// survey-component.ts
import { Component, OnInit } from "@angular/core";
import { Model } from "survey-core";
import * as SurveyTheme from "survey-core/themes";
// import "./survey.component.css";
import "survey-core/defaultV2.min.css";
import { SurveyModule } from 'survey-angular-ui'; // Import SurveyModule
import { json } from "./json";

const storageItemKey = "my-survey";

function saveSurveyData(survey: any) {
    const data = survey.data;
    data.pageNo = survey.currentPageNo;
    window.localStorage.setItem(storageItemKey, JSON.stringify(data));
}

@Component({
    selector: "component-survey",
    templateUrl: "./survey-component.html",
    standalone: true,
    imports: [SurveyModule], // Add imports
})
export class SurveyComponent implements OnInit {
    public model: Model = new Model();

    ngOnInit() {
        const survey = new Model(json);
        survey.applyTheme(SurveyTheme.FlatLightPanelless);
        survey.onValueChanged.add(saveSurveyData);
        survey.onCurrentPageChanged.add(saveSurveyData);

        survey.data = {
            "20eb23ce-6316-43fa-8e7a-6eaee7d5b615":
                "68a11cd1-2c08-4cf8-9e42-8586fa9dd086",
        };
        survey.onComplete.add(() => {
            window.localStorage.setItem(storageItemKey, "");
        });
        survey.onComplete.add((sender, options) => {
            console.log(JSON.stringify(sender.data, null, 3));
        });
        this.model = survey;
    }
}