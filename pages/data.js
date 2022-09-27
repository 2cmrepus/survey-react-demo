window.question_set = {
	title: 'CBCL 1.5',
	answers: [{ value: 0, text: "0 (不準確)" },
	{ value: 1, text: "1 (間中準確)" },
	{ value: 2, text: "2 (非常準確)" }
	],
	questions: ['身體痛楚(病因不明;不包括肚痛、胃痛或頭痛)',
		'行為幼稚,與年館不符'
	],
	questions_with_remarks: [1, 2],
	remark_title: '(請描述)',
	complete_text: '請不要離開此頁面, 請把以下 QR CODE 交給姑娘',
	complete_title: '完成',
	passcode: '123456',
	formulas: [
		{
			name: 'EMO',
			q: [21, 46, 51, 79, 82, 83, 92, 97, 99],
			tm: [50, 50, 51, 55, 59, 62, 65, 67, 69, 70, 73, 77, 80, 83, 87, 90, 93, 97, 100],
		},
		{
			name: 'ANX',
			q: [10, 33, 37, 43, 47, 68, 87, 90],
			tm: [50, 50, 51, 52, 56, 59, 63, 66, 69, 70, 74, 79, 83, 87, 91, 96, 100]
		},
		{
			name: 'SOM',
			q: [1, 7, 12, 19, 24, 39, 45, 52, 78, 86, 93],
			tm: [50, 50, 53, 58, 62, 65, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100]
		},
		{
			name: 'WIT',
			q: [2, 4, 23, 62, 67, 70, 71, 98],
			tm: [50, 51, 56, 60, 63, 67, 70, 73, 76, 79, 82, 85, 88, 91, 94, 97, 100]
		},
		{
			name: 'SLE',
			q: [22, 38, 48, 64, 74, 84, 94],
			tm: [50, 50, 51, 53, 56, 59, 62, 64, 67, 70, 76, 82, 88, 94, 100]
		},
		{
			name: 'ATT',
			q: [5, 6, 56, 59, 95],
			tm: [50, 50, 51, 53, 57, 62, 67, 70, 73, 77, 80]
		},
		{
			name: 'AGG',
			q: [8, 15, 16, 18, 20, 27, 29, 35, 40, 42, 44, 53, 58, 66, 69, 81, 85, 88, 96],
			tm: [50, 50, 50, 50, 50, 50, 50, 50, 50, 51, 51, 52, 53, 55, 56, 58, 59, 60, 62, 63, 64, 65, 66, 68,
				69, 70, 72, 75, 77, 79, 82, 84, 86, 88, 91, 93, 95, 98, 100]
		},
		{
			name: 'INT',
			q: [21, 46, 51, 79, 82, 83, 92, 97, 99, 10, 33, 37, 43, 47, 68, 87, 90, 1, 7, 12, 19, 24, 39, 45, 52,
				78, 86, 93, 2, 4, 23, 62, 67, 70, 71, 98],
			tm: [29, 33, 37, 41, 43, 45, 47, 49, 51, 53, 55, 56, 58, 59, 60, 61, 62, 63, 64, 65, 65, 66, 67, 68,
				69, 70, 71, 71, 72, 73, 73, 74, 74, 75, 76, 76, 77, 78, 78, 79, 80, 80, 81, 81, 82, 83, 83, 84, 85, 85,
				86, 86, 87, 88, 88, 89, 90, 90, 91, 92, 92, 93, 94, 94, 95, 95, 96, 97, 97, 98, 99, 99, 100]
		},
		{
			name: 'EXT',
			q: [5, 6, 56, 59, 95, 8, 15, 16, 18, 20, 27, 29, 35, 40, 42, 44, 53, 58, 66, 69, 81, 85, 88, 96],
			tm: [28, 32, 35, 37, 39, 40, 42, 43, 44, 46, 47, 48, 50, 51, 52, 54, 55, 56, 57, 58, 59, 60, 61,
				62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 73, 74, 76, 77, 79, 80, 82, 83, 85, 86, 88, 89, 92, 95, 97, 100]
		},
		{
			name: 'TOT',
			q: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
				28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
				52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
				76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
			tm: [28, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 40, 41, 41, 42, 43, 43, 44, 45, 45, 46,
				46, 47, 48, 48, 49, 50, 50, 51, 51, 52, 52, 53, 53, 54, 54, 55, 56, 56, 57, 57, 58, 58, 58, 59, 59, 59, 59,
				60, 60, 61, 61, 62, 62, 63, 63, 63, 64, 64, 65, 65, 65, 66, 66, 67, 67, 68, 68, 68, 68, 68, 69, 69, 69, 70,
				70, 70, 70, 71, 71, 71, 72, 72, 73, 73, 73, 74, 74, 74, 75, 75, 76, 76, 76, 77, 77, 77, 78, 78, 79, 79, 79,
				80, 80, 80, 81, 81, 82, 82, 82, 83, 83, 83, 84, 84, 85, 85, 85, 86, 86, 86, 87, 87, 88, 88, 88, 89, 89, 89,
				89, 89, 90, 90, 90, 90, 90, 90, 91, 91, 91, 91, 91, 91, 92, 92, 92, 92, 92, 92, 93, 93, 93, 93, 93, 93, 93,
				94, 94, 94, 94, 94, 94, 95, 95, 95, 95, 95, 95, 96, 96, 96, 96, 96, 96, 96, 97, 97, 97, 97, 97, 97, 98, 98,
				98, 98, 98, 98, 99, 99, 99, 99, 99, 99, 100, 100, 100, 100]
		},
		{
			name: 'AFF',
			q: [13, 24, 38, 43, 49, 50, 71, 74, 89, 90],
			tm: [50, 51, 52, 56, 60, 63, 67, 70, 72, 75, 77, 79, 82, 84, 86, 88, 91, 93, 95, 98, 100]
		},
		{
			name: 'ANX2',
			q: [10, 22, 28, 32, 37, 47, 48, 51, 87, 99],
			tm: [50, 50, 50, 51, 54, 57, 60, 63, 67, 70, 73, 75, 79, 82, 85, 87, 90, 93, 96, 98, 100]
		},
		{
			name: 'PDD',
			q: [3, 4, 7, 21, 23, 25, 63, 67, 70, 76, 80, 92, 98],
			tm: [50, 50, 51, 52, 57, 59, 63, 66, 68, 70, 72, 74, 75, 77, 79, 81, 82, 84, 86, 88, 89, 91, 93, 95, 96, 98, 100]
		},
		{
			name: 'ADHD',
			q: [5, 6, 8, 16, 36, 59],
			tm: [50, 50, 50, 50, 51, 52, 54, 57, 60, 64, 67, 71, 76]
		},
		{
			name: 'ODD',
			q: [15, 20, 44, 81, 85, 88],
			tm: [50, 50, 50, 51, 52, 55, 59, 64, 67, 70, 73, 77, 80]
		}
	],
	charts: [
		{
			title: 'CBCL Clinical Profile',
			x: ['EMO', 'ANX', 'SOM', 'WIT', 'SLE', 'ATT', 'AGG', 'INT', 'EXT', 'TOT']
		},
		{
			title: 'DSM Scales',
			x: ['AFF', 'ANX2', 'PDD', 'ADHD', 'ODD']
		}
	]
};

window.survey_json = {
	completedHtml: "<h3>完成</h3> <h5>請不要離開此頁面, 請把以下 QR CODE 交給姑娘</h5>",
	pages: [],
	showQuestionNumbers: 'off',
	useDropdown: "never",
	showCompletedPage: false
};