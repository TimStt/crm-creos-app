// import { IIssue } from "../../../shared/types/issue/index";
// import { calcOfdataForClosedTasks } from "../closed-tasks-by-work-week";
// import { expect, describe, it } from "@jest/globals";

// describe("calcOfdataForClosedTasks", () => {
//   it("правильно рассчитывать прибыль, расходы и дисперсию для заданных задач", () => {
//     const issues: IIssue[] = [
//       {
//         id: "1",
//         status: "Done",
//         designer: "John Doe",
//         project: "Project 1",
//         date_created: "2024-07-15",
//         summary: "Task 1",
//         received_from_client: 7000,
//         send_to_project_manager: 100,
//         send_to_account_manager: 3000,
//         send_to_designer: 2000,
//         date_updated: "2024-07-15",
//         date_started_by_designer: "2024-07-10",
//         date_finished_by_designer: "2024-07-25",
//         date_finished: "2024-07-25",
//       },
//       {
//         id: "2",
//         status: "Done",
//         designer: "John Doe",
//         project: "Project 1",
//         date_created: "2024-07-10",
//         summary: "Task 2",
//         received_from_client: 10000,
//         send_to_project_manager: 200,
//         send_to_account_manager: 300,
//         send_to_designer: 1000,
//         date_updated: "2024-07-15",
//         date_started_by_designer: "2024-07-08",
//         date_finished_by_designer: "2024-07-17",
//         date_finished: "2024-07-17",
//       },
//       {
//         id: "3",
//         status: "Done",
//         designer: "John Doe",
//         project: "Project 1",
//         date_created: "2024-07-01",
//         summary: "Task 2",
//         received_from_client: 20000,
//         send_to_project_manager: 1000,
//         send_to_account_manager: 1000,
//         send_to_designer: 10000,
//         date_updated: "2024-07-05",
//         date_started_by_designer: "2024-07-01",
//         date_finished_by_designer: "2024-07-09",
//         date_finished: "2024-07-09",
//       },
//     ];

//     const weeksAgo = 3;
//     const result = calcOfdataForClosedTasks({ weeksAgo, issues });

//     expect(result).toHaveProperty("finances");
//     expect(result.finances.profit).toEqual([20000, 10000, 7000]);
//     expect(result.finances.expenditure).toEqual([12000, 1500, 5100]);
//     expect(result.finances.variance).toEqual([8000, 8500, 1900]);
//     expect(result.periodWeeksNumber).toEqual([28, 29, 30]);
//   });
// });
