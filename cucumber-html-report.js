const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/cucumber-json',
	reportPath: './reports/cucumberHTMLreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '91'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Custom project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'june 13th 2021, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'Nov 13th 2021, 02:56 PM EST'}
        ]
    }
});