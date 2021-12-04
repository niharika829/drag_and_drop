import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DragDropContext } from 'react-beautiful-dnd';
import WidgetContainer from './BrickContentWidgetContainer/index';
import MainContainer from './BrickContentMainContainer/index';
import {Grid} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    workspaceWrapper: {
        minHeight: 'inherit',
    },
    headerWrapper: {
        padding: '10px 15px 10px 5px',
        borderRadius: '10px',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.palette.boxShadow,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    contentCreateWrapper: {
        padding: '20px 0px',
        position: 'relative',
        minHeight: 'inherit',
    },
    contentGridWrapper: {
        maxHeight: '80vh',
        minHeight: '80vh',
        '& .MuiGrid-item': {
            maxHeight: 'inherit',
        },
    },
}));

const BrickContent = () => {
    const classes = useStyles();
    const [ nativeFieldState, setNativeFieldState ] = React.useState([]);
    const [ widgetStack, setWidgetStack ] = React.useState([]);

   console.log(`widgetStack`, widgetStack)
    const onDragEnd = (result) => {
        console.log(`result`, result)
        if (!result.destination) return;
        if (result.destination.droppableId === 'widget-container') return;
        if (result.destination.droppableId === 'main-container' && result.source.droppableId === 'main-container') {
            const newStack = Array.from(widgetStack);
            const [ removed ] = newStack.splice(result.source.index, 1);
            newStack.splice(result.destination.index, 0, removed);
            setWidgetStack(newStack)
            return;
        }
        if (result.destination.droppableId === 'main-container' && result.source.droppableId === 'widget-container') {
            const newWidgetToAdd = nativeFieldState.find((item, index) => index === result.source.index);
            if (newWidgetToAdd?.machine_name === 'section') {
                newWidgetToAdd.value = [];
            }
            const newStack = Array.from(widgetStack);
            newStack.splice(result.destination.index, 0, newWidgetToAdd);
           setWidgetStack(newStack)
        }
        if (result.source.droppableId === 'widget-container' && result.destination.droppableId?.includes("section-container")) {
            // const data = widgetStack?.find((item) => item?.id === result.destination.droppableId);
            const data = widgetStack[result.destination.droppableId?.split("-")[2]]
            // const fieldIndex = widgetStack.indexOf(data);
            const fieldIndex = result.destination.droppableId?.split("-")[2]
            const newWidgetToAdd = nativeFieldState.find((item, index) => index === result.source.index);
           
            data.value.splice(result.destination.index, 0, newWidgetToAdd);
            const newWidgetStack = widgetStack;
            newWidgetStack[ fieldIndex ] = data;
           setWidgetStack(newWidgetStack)
        }
    };
    return (
        <div className={classes.workspaceWrapper}>
            <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
                <div className={classes.contentCreateWrapper}>
                <Grid className={classes.contentGridWrapper} container spacing={1}>
                        <Grid item sm={3}>
                            <WidgetContainer setNativeFieldState={setNativeFieldState} nativeFieldState={nativeFieldState}/>
                        </Grid>
                        <Grid item sm={6}>
                            <MainContainer widgetStack={widgetStack} setWidgetStack={setWidgetStack}/>
                        </Grid>
                     
                    </Grid> 
                      
                      
                </div>
            </DragDropContext>
           
        </div>
    );
};

export default BrickContent;
