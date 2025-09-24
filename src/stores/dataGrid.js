import { ref } from 'vue'
import { defineStore } from 'pinia'
import defaultRows from './rows.json'
import defaultColumns from './columns.json'
import axios from 'axios'

export const useDataGridStore = defineStore('dataGrid', () => {
    const urlRows = ref('')
    const urlColumns = ref('')
    const rows = ref(urlRows.value === '' ? defaultRows : importData(urlRows.value))
    const columns = ref(urlColumns.value === '' ? defaultColumns : importData(urlColumns.value))

    function importData(url) {
        axios.get(url).then((response) => {
            return response.data
        })
    }
    function newUrl(url1, url2) {
        urlRows.value = url1
        urlColumns.value = url2
    }

    return { urlRows, urlColumns, rows, columns, newUrl }
})
