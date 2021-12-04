import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Draggable, Droppable } from 'react-beautiful-dnd';


const useStyles = makeStyles((theme) => ({
    containerWrapper: {
        maxHeight: 'inherit',
    },
    sectionWrapperCard: {
      
        padding: '10px 20px 10px 20px',
    },
    droppableDivWrapper: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    headingWrapper: {
        display: 'flex',
        alignItems: 'center',
    },
    createIcon: {
        fontSize: '22px',
        paddingLeft: '5px',
    },
    headingInfoContainer: {
        display: 'flex',
        fontSize: '12px',
        gap: '10px',
    },
    colorPrimary: {
        color:'powderblue',
    },
    homepageBodyWrapper: {
        flexGrow: 1,
        backgroundColor: 'lightgrey',
        borderRadius: '10px',
        border: `1px solid gray`,
        marginTop: '10px',
        padding: '15px',
    },
    widgetWrapper: {
        backgroundColor: 'blue',
        borderRadius: '10px',
        border: `1px solid gray`,
        marginTop: '10px',
        width: '100%',
        padding: '15px',
        cursor: 'pointer',
        transition: 'all .3s ease-out',
        color: 'powderblue',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        fontSize: '16px',
        '&:hover': {
            backgroundColor: 'powderblue',
            color:"black"
        },
    },
    selectedWidget: {
        backgroundColor: 'powderblue',
        border: `2px solid black`,
        color: 'black',
        transform: 'scale(1.02)',
    },
    subWrapper: {
        flexGrow: 1,
        marginTop: '60px',
        borderRadius: '10px',
        padding: '1px',
        marginLeft: -38,
        marginRight: -25,
    },
}));

const CreateContentMainContainer = ({widgetStack,setWidgetStack}) => {
    const classes = useStyles();

 


    return (
        <div className={classes.containerWrapper}>
            <Droppable
                droppableId="main-container"
                key="anotherUnique"
            >
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={classes.droppableDivWrapper}
                    >
                        <div className={classes.homepageBodyWrapper}>
                            {widgetStack.length ? (
                                <>
                                    {widgetStack.map((widget, index) => (
                                        <Draggable
                                            key={widget.id}
                                            draggableId={widget.id}
                                            index={index}
                                            isDragDisabled={widget?.machine_name === 'section'}
                                        >
                                      
                                            {(dragProvided) => (
                                                <div>
                                                    <div
                                                        aria-hidden="true"
                                                        ref={dragProvided.innerRef}
                                                        {...dragProvided.draggableProps}
                                                        {...dragProvided.dragHandleProps}
                                                       
                                                        className={`
                                                            ${ classes.widgetWrapper }
                                                           `}
                                                    >
                                                        <div>{widget.name}</div>

                                                        {widget?.machine_name === 'section' && (
                                                            <Droppable
                                                                droppableId={`section-container-${index}`}
                                                                key="droppableSubItem"
                                                                renderClone={(provider, snapshot, rubric) => (
                                                                    <div
                                                                        ref={provider.innerRef}
                                                                        {...provider.draggableProps}
                                                                        {...provider.dragHandleProps}
                                                                        className={` ${ classes.widgetWrapper }`}
                                                                    >

                                                                        <div style={{ marginTop: '6px' }}>{widget?.value[ rubric.source.index ].name}</div>
                                                                       

                                                                    </div>
                                                                )}
                                                            >
                                                                {(provider) => (
                                                                    <div  className={`
                                                                ${ classes.subWrapper }
                                                                ${ classes.droppableDivWrapper }`}
                                                                    >
                                                                        <div
                                                                            {...provider.droppableProps}
                                                                            ref={provider.innerRef}
                                                                        >
                                                                            {Array.isArray(widget.value) && widget.value.length > 0  ? (
                                                                                <div style={{ padding: '2px' }}>
                                                                                    {widget.value.map((item, i) => (
                                                                                        <Draggable
                                                                                            key={item.id}
                                                                                            draggableId={item.id}
                                                                                            index={i}
                                                                                        >
                                                                                            {(dragProvider) => (
                                                                                                <div>
                                                                                                    <div
                                                                                                        aria-hidden="true"
                                                                                                        ref={dragProvider.innerRef}
                                                                                                        {...dragProvider.draggableProps}
                                                                                                        {...dragProvider.dragHandleProps}
                                                                                                        onClick={(e) => {
                                                                                                            e.stopPropagation();
                                                                                                        }}
                                                                                                        className={` ${ classes.widgetWrapper }`}
                                                                                                    >

                                                                                                        <div style={{ marginTop: '6px' }}>{item.name}</div>
                                                                                                       

                                                                                                    </div>
                                                                                                    {dragProvider.placeholder}
                                                                                                </div>
                                                                                            )}
                                                                                        </Draggable>
                                                                                    ))}

                                                                                </div>
                                                                            ) :  <div style={{minHeight: '200px',padding: '20px',border: '1px solid black'}}>no data</div>}
                                                                        </div>
                                                                        {provider.placeholder}
                                                                    </div>
                                                                )}
                                                            </Droppable>
                                                        )}
                                          
                                                    </div>
                                                    {dragProvided.placeholder}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}

                                </>
                            ) :  <div style={{minHeight: '200px',padding: '20px',border: '1px solid black'}}>no data</div>}
                        </div>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default CreateContentMainContainer;
