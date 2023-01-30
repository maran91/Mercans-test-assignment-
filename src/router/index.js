import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/quick-access',
        name: 'quick_access',
        component: () => import('../views/QuickAccessView.vue')
    }, {
        path: '/my-information',
        name: 'my_information',
        component: () => import('../views/MyInformationView.vue')

    }, {
        path: '/payslips',
        name: 'payslips',
        component: () => import('../views/PayslipsView.vue')
    }, {
        path: '/timesheet',
        name: 'time_entry',
        component: () => import('../views/TimeEntryView.vue')
    }, {
        path: '/leaves',
        name: 'leaves',
        component: () => import('../views/LeavesView.vue')
    }, {
        path: '/expense',
        name: 'expense',
        component: () => import('../views/ExpenseView.vue')
    }, {
        path: '/orgchart',
        name: 'organizational_chart',
        component: () => import('../views/OrganizationalChartView.vue')
    }, {
        path: '/my-team',
        name: 'my_team',
        component: () => import('../views/MyTeamView.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
