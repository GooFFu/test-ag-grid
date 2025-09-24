<template>
    <div class="grid">
        <ag-grid-vue
            style="width: 100%; height: 750px"
            class="ag-theme-alpine"
            :columnDefs="dataTable.columns"
            :rowData="dataTable.rows"
            :rowSelection.mode="multiRow"
            :animateRows="true"
            :gridOptions="gridOptions"
            :defaultColDef="defaultColDef"
            :cellSelection="true"
            :dataTypeDefinitions="dataTypeDefinitions"
            :undoRedoCellEditing="true"
            :enableCellChangeFlash="true"
            :rowDragManaged="true"
            :rowGroupPanelShow="rowGroupPanelShow"
            :enableCharts="enableCharts"
            :rowHeight="rowHeight"
            :statusBar="statusBar"
            @cell-value-changed="onCellValueChanged"
            @undo-started="onUndoStarted"
            @undo-ended="onUndoEnded"
            @redo-started="onRedoStarted"
            @redo-ended="onRedoEnded"
            @cell-clicked="cellWasClicked"
            @grid-ready="onGridReady"
        >
        </ag-grid-vue>
    </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue3'
import { ModuleRegistry } from 'ag-grid-community'
import { AllEnterpriseModule } from 'ag-grid-enterprise'
import { IntegratedChartsModule } from 'ag-grid-enterprise'
import { AgChartsEnterpriseModule } from 'ag-charts-enterprise'
import 'ag-grid-enterprise'
import { ref } from 'vue'
import { useDataGridStore } from '@/stores/dataGrid'

ModuleRegistry.registerModules([
    AllEnterpriseModule,
    IntegratedChartsModule.with(AgChartsEnterpriseModule),
])

export default {
    components: {
        AgGridVue,
    },
    setup() {
        const dataTable = ref({
            rows: useDataGridStore().rows,
            columns: useDataGridStore().columns,
        })
        const gridOptions = {}
        const gridApi = ref()
        const onGridReady = (params) => {
            //gridApi.value.showLoadingOverlay()
            gridApi.value = params.api
        }
        const dataTypeDefinitions = ref(null)
        const rowGroupPanelShow = ref(null)
        const defaultColDef = {
            sortable: true,
            filter: true,
            enableRowGroup: true,
            resizable: true,
            wrapText: false,
            autoHeight: true,
        }
        const statusBar = ref(null)
        const rowHeight = ref(null)
        const onCellValueChanged = (params) => {
            //console.log('это туть', params)
        }
        const onUndoStarted = (event) => {
            //console.log('undoStarted', event)
        }
        const onUndoEnded = (event) => {
            //console.log('undoEnded', event)
        }
        const onRedoStarted = (event) => {
            //console.log('redoStarted', event)
        }
        const onRedoEnded = (event) => {
            //console.log('redoEnded', event)
        }
        const undo = () => {
            gridApi.value.undoCellEditing()
        }
        const redo = () => {
            gridApi.value.redoCellEditing()
        }
        const enableCharts = true
        return {
            dataTable,
            onGridReady,
            enableCharts,
            gridOptions,
            defaultColDef,
            rowHeight,
            dataTypeDefinitions,
            rowGroupPanelShow,
            statusBar,
            onCellValueChanged,
            onUndoStarted,
            onUndoEnded,
            onRedoStarted,
            onRedoEnded,
            undo,
            redo,
            cellWasClicked: (event) => {
                console.log(event)
            },
            deselectRows: () => {
                gridApi.value.deselectAll()
            },
        }
    },
}
</script>
