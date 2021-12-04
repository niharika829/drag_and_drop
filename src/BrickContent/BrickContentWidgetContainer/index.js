import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import NativeFields from "../../Data/nativefields"


const useStyles = makeStyles((theme) => ({
    widgetsWrapper: {
        maxHeight: 'inherit',
        overflowY: 'scroll',
        padding: '0px 10px',
    },
    stickyTop: {
        position: 'sticky',
        top: 0,
    },

    widgetContainer: {
        width: '100%',
        cursor: 'pointer',
        marginTop: '10px',
        background: theme.palette.background.paper,
        boxShadow: theme.palette.boxShadow,
        border: `1px solid gray`,
        borderRadius: '5px',
        padding: '20px 0px 20px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 'inherit',
        fontSize: '12px',
        color: theme.palette.primary.light,
        transition: 'all .3s ease-out',
        '&:hover': {
            backgroundColor: 'powderblue',
        },
        '@media (max-width: 800px)': {
            borderRadius: '7px',
            padding: '10px 0px 10px 10px',
        },
    },

    cloneWidget: {
        '& div': {
            transform: 'none !important',
        },
    },

}));
console.log(`NativeFields`, NativeFields)
const WidgetContainer = ({setNativeFieldState,nativeFieldState}) => {
    const classes = useStyles();
useEffect(() => {
    setNativeFieldState(NativeFields)
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
  
    const handlePushToWidgetStack = (widget) => {
        console.log(`widget`, widget)
    };

    const getStyle = (style, snapshot) => {
        if (!snapshot.isDropAnimating) {
            return style;
        }
        return {
            ...style,
            // cannot be 0, but make it super tiny
            transitionDuration: '0.001s',
        };
    };

    return (
        <>
            <div className={classes.widgetsWrapper}>
                <div className={`${ classes.sectionWrapperCard } ${ classes.stickyTop }`}>
                    Fields
                </div>
          
                    <Droppable
                        isDropDisabled
                        droppableId="widget-container"
                    >
                        {(droppableProvider, droppableSnapshot) => (
                            <div>
                                <div
                                    ref={droppableProvider.innerRef}
                                    isDraggingOver={droppableSnapshot.isDraggingOver}
                                    {...droppableProvider.droppableProps}
                                >
                                    {nativeFieldState?.length > 0 && nativeFieldState.map((fields, index) => (
                                        <Draggable
                                            key={fields.id}
                                            draggableId={fields.id}
                                            index={index}
                                        >
                                            {(draggableProvider, draggableSnapshot) => (
                                                <>
                                                    <div
                                                        aria-hidden="true"
                                                        ref={draggableProvider.innerRef}
                                                        {...draggableProvider.draggableProps}
                                                        {...draggableProvider.dragHandleProps}
                                                        onClick={() => handlePushToWidgetStack(fields)}
                                                        className={classes.widgetContainer}
                                                        isDragging={draggableSnapshot.isDragging && !draggableSnapshot.isDropAnimating}
                                                        style={getStyle(draggableProvider.draggableProps.style, draggableSnapshot)}
                                                    >
                                                        {fields.name}
                                                    </div>
                                                    {draggableSnapshot.isDragging && (
                                                        <div
                                                            className={`${ classes.widgetContainer } ${ classes.cloneWidget }`}
                                                        >
                                                            {fields.name}
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                        </Draggable>
                                    ))}
                                </div>
                                {droppableProvider.placeholder}
                            </div>
                        )}
                    </Droppable>
               

            </div>
        </>
    );
};

export default WidgetContainer;
