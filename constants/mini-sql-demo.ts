export const miniSqlDemo = {
  "rowCount": 253680,
  "columnCount": 22,
  "columns": [
    "HeartDiseaseorAttack",
    "HighBP",
    "HighChol",
    "CholCheck",
    "BMI",
    "Smoker",
    "Stroke",
    "Diabetes",
    "PhysActivity",
    "Fruits",
    "Veggies",
    "HvyAlcoholConsump",
    "AnyHealthcare",
    "NoDocbcCost",
    "GenHlth",
    "MentHlth",
    "PhysHlth",
    "DiffWalk",
    "Sex",
    "Age",
    "Education",
    "Income"
  ],
  "queries": [
    {
      "id": "bmi-over-30",
      "label": "BMI > 30 sample",
      "sql": "SELECT BMI, Age, Sex, HeartDiseaseorAttack FROM health WHERE BMI > 30 LIMIT 10;",
      "description": "Filters health survey records to inspect obese respondents and heart disease indicators.",
      "rows": [
        {
          "BMI": "40.0",
          "Age": "9.0",
          "Sex": "0.0",
          "HeartDiseaseorAttack": "0.0"
        },
        {
          "BMI": "34.0",
          "Age": "10.0",
          "Sex": "0.0",
          "HeartDiseaseorAttack": "0.0"
        },
        {
          "BMI": "33.0",
          "Age": "4.0",
          "Sex": "0.0",
          "HeartDiseaseorAttack": "0.0"
        },
        {
          "BMI": "33.0",
          "Age": "6.0",
          "Sex": "0.0",
          "HeartDiseaseorAttack": "0.0"
        },
        {
          "BMI": "38.0",
          "Age": "13.0",
          "Sex": "0.0",
          "HeartDiseaseorAttack": "0.0"
        },
        {
          "BMI": "32.0",
          "Age": "5.0",
          "Sex": "0.0",
          "HeartDiseaseorAttack": "0.0"
        },
        {
          "BMI": "37.0",
          "Age": "10.0",
          "Sex": "1.0",
          "HeartDiseaseorAttack": "1.0"
        },
        {
          "BMI": "31.0",
          "Age": "12.0",
          "Sex": "1.0",
          "HeartDiseaseorAttack": "0.0"
        },
        {
          "BMI": "34.0",
          "Age": "9.0",
          "Sex": "0.0",
          "HeartDiseaseorAttack": "0.0"
        },
        {
          "BMI": "33.0",
          "Age": "13.0",
          "Sex": "1.0",
          "HeartDiseaseorAttack": "0.0"
        }
      ]
    },
    {
      "id": "sex-count",
      "label": "Group by sex",
      "sql": "SELECT Sex, COUNT(*) FROM health GROUP BY Sex;",
      "description": "Aggregates the dataset by sex to validate GROUP BY and COUNT behavior.",
      "rows": [
        {
          "Sex": "0.0",
          "COUNT(*)": 141974
        },
        {
          "Sex": "1.0",
          "COUNT(*)": 111706
        }
      ]
    },
    {
      "id": "age-heart-rate",
      "label": "Heart disease by age group",
      "sql": "SELECT Age, AVG(HeartDiseaseorAttack) FROM health GROUP BY Age;",
      "description": "Uses grouped aggregation to compare heart disease indicator averages by age category.",
      "rows": [
        {
          "Age": "1.0",
          "AVG(HeartDiseaseorAttack)": 0.0051,
          "Rows": 5700
        },
        {
          "Age": "2.0",
          "AVG(HeartDiseaseorAttack)": 0.0071,
          "Rows": 7598
        },
        {
          "Age": "3.0",
          "AVG(HeartDiseaseorAttack)": 0.0113,
          "Rows": 11123
        },
        {
          "Age": "4.0",
          "AVG(HeartDiseaseorAttack)": 0.014,
          "Rows": 13823
        },
        {
          "Age": "5.0",
          "AVG(HeartDiseaseorAttack)": 0.0217,
          "Rows": 16157
        },
        {
          "Age": "6.0",
          "AVG(HeartDiseaseorAttack)": 0.0359,
          "Rows": 19819
        },
        {
          "Age": "7.0",
          "AVG(HeartDiseaseorAttack)": 0.0542,
          "Rows": 26314
        },
        {
          "Age": "8.0",
          "AVG(HeartDiseaseorAttack)": 0.0731,
          "Rows": 30832
        },
        {
          "Age": "9.0",
          "AVG(HeartDiseaseorAttack)": 0.101,
          "Rows": 33244
        },
        {
          "Age": "10.0",
          "AVG(HeartDiseaseorAttack)": 0.1302,
          "Rows": 32194
        },
        {
          "Age": "11.0",
          "AVG(HeartDiseaseorAttack)": 0.1677,
          "Rows": 23533
        },
        {
          "Age": "12.0",
          "AVG(HeartDiseaseorAttack)": 0.1936,
          "Rows": 15980
        },
        {
          "Age": "13.0",
          "AVG(HeartDiseaseorAttack)": 0.2395,
          "Rows": 17363
        }
      ]
    },
    {
      "id": "activity-bmi",
      "label": "Physical activity vs BMI",
      "sql": "SELECT PhysActivity, AVG(BMI) FROM health GROUP BY PhysActivity;",
      "description": "Compares average BMI between respondents with and without physical activity.",
      "rows": [
        {
          "PhysActivity": "0.0",
          "AVG(BMI)": 30.1,
          "Rows": 61760
        },
        {
          "PhysActivity": "1.0",
          "AVG(BMI)": 27.83,
          "Rows": 191920
        }
      ]
    },
    {
      "id": "preview",
      "label": "Dataset preview",
      "sql": "SELECT HeartDiseaseorAttack, HighBP, HighChol, BMI, Smoker, PhysActivity, Sex, Age, Education, Income FROM health LIMIT 8;",
      "description": "Shows a compact preview of the health indicators schema used by the engine.",
      "rows": [
        {
          "HeartDiseaseorAttack": "0.0",
          "HighBP": "1.0",
          "HighChol": "1.0",
          "BMI": "40.0",
          "Smoker": "1.0",
          "PhysActivity": "0.0",
          "Sex": "0.0",
          "Age": "9.0",
          "Education": "4.0",
          "Income": "3.0"
        },
        {
          "HeartDiseaseorAttack": "0.0",
          "HighBP": "0.0",
          "HighChol": "0.0",
          "BMI": "25.0",
          "Smoker": "1.0",
          "PhysActivity": "1.0",
          "Sex": "0.0",
          "Age": "7.0",
          "Education": "6.0",
          "Income": "1.0"
        },
        {
          "HeartDiseaseorAttack": "0.0",
          "HighBP": "1.0",
          "HighChol": "1.0",
          "BMI": "28.0",
          "Smoker": "0.0",
          "PhysActivity": "0.0",
          "Sex": "0.0",
          "Age": "9.0",
          "Education": "4.0",
          "Income": "8.0"
        },
        {
          "HeartDiseaseorAttack": "0.0",
          "HighBP": "1.0",
          "HighChol": "0.0",
          "BMI": "27.0",
          "Smoker": "0.0",
          "PhysActivity": "1.0",
          "Sex": "0.0",
          "Age": "11.0",
          "Education": "3.0",
          "Income": "6.0"
        },
        {
          "HeartDiseaseorAttack": "0.0",
          "HighBP": "1.0",
          "HighChol": "1.0",
          "BMI": "24.0",
          "Smoker": "0.0",
          "PhysActivity": "1.0",
          "Sex": "0.0",
          "Age": "11.0",
          "Education": "5.0",
          "Income": "4.0"
        },
        {
          "HeartDiseaseorAttack": "0.0",
          "HighBP": "1.0",
          "HighChol": "1.0",
          "BMI": "25.0",
          "Smoker": "1.0",
          "PhysActivity": "1.0",
          "Sex": "1.0",
          "Age": "10.0",
          "Education": "6.0",
          "Income": "8.0"
        },
        {
          "HeartDiseaseorAttack": "0.0",
          "HighBP": "1.0",
          "HighChol": "0.0",
          "BMI": "30.0",
          "Smoker": "1.0",
          "PhysActivity": "0.0",
          "Sex": "0.0",
          "Age": "9.0",
          "Education": "6.0",
          "Income": "7.0"
        },
        {
          "HeartDiseaseorAttack": "0.0",
          "HighBP": "1.0",
          "HighChol": "1.0",
          "BMI": "25.0",
          "Smoker": "1.0",
          "PhysActivity": "1.0",
          "Sex": "0.0",
          "Age": "11.0",
          "Education": "4.0",
          "Income": "4.0"
        }
      ]
    }
  ]
} as const;
