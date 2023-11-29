import React, { useCallback, useMemo, useRef, useState} from 'react';
import { CirclesWithBar } from 'react-loader-spinner'
import { AgGridReact } from 'ag-grid-react';
import getFullMovieIndexData from './indexData.js';

export default function FullMovieIndex() {
    const gridRef = useRef()
    const [rowData, setRowData] = useState();
    // const [categoryFilterState, setCategoryFilterState] = useState({
    //     Hallmark: false,
    //     US: false,
    //     Abroad: false,
    // });

    const [columDefs, setColumnDefs] = useState([
        {
            headerName: 'Name',
            field: 'name',
            getQuickFilterText: params => {
                return params.value.name;
            },
            wrapText: true,
        },
        {
            headerName: 'Description',
            field: 'description',
            wrapText: true
        },

    ]);
    
    const onGridReady = useCallback((params) => {
        // isLoading();
        setRowData(getFullMovieIndexData());
    }, []);

    // const isLoading = useCallback(() => {
    //     gridRef.current.api.showLoadingOverlay();
    // }, []);

    const onFirstDataRendered = useCallback(() => {
        let allColumnIds = [];
        gridRef.current.columnApi.getColumns().forEach((column) => {
            allColumnIds.push(column.getId());
        });
        gridRef.current.columnApi.autoSizeAllColumns(allColumnIds);
        gridRef.current.api.sizeColumnsToFit();
    }, []);

    const loadingOverlayComponentParams = useMemo(() => {
        return {
            height: "100",
            width: "100",
            color: "#4fa94d",
            ariaLabel: 'circles-with-bar-loading'
        };
    }, []);

    return (
        <>
            <div className="table-wrapper">
                <div className="ag-theme-material">
                    <AgGridReact
                        ref={gridRef}
                        rowData={rowData}
                        columnDefs={columDefs}
                        domLayout="autoHeight"
                        autoSizeAllColumns="true"
                        // loadingOverlayComponent={CirclesWithBar}
                        // loadingOverlayComponentParams={loadingOverlayComponentParams}
                        onGridReady={onGridReady}
                        style={{ width: '100%', height: '100%' }}
                    ></AgGridReact>
                </div>
            </div>
        </>
    );
}