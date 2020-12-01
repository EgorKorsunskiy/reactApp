import React from 'react';

const CHILD_WIDTH = 15;

export class Draggable extends React.Component {

    initCoords = {}

    state = {
        transformX: 0,
    }

    mouseDownHandler = e => {
        document.body.style.userSelect = 'none';
        window.addEventListener('mousemove', this.mouseMoveHandler);
        window.addEventListener('mouseup', this.mouseUpHandler);

        this.initCoords.downX = e.clientX;
    }

    mouseUpHandler = () => {
        document.body.style.userSelect = 'auto';
        window.removeEventListener('mousemove', this.mouseMoveHandler);
        window.removeEventListener('mouseup', this.mouseUpHandler);
    }

    mouseMoveHandler = e => {
        let transformX;
        console.log(e.clientX)
        if(e.clientX >= 0 + CHILD_WIDTH && e.clientX <= 400){
            transformX = e.clientX - this.initCoords.downX;
            this.props.updateValue(Math.round(transformX / this.props.width))
        }
        else{
            if(e.clientX < 0 + CHILD_WIDTH){
                transformX = 0;
                this.props.updateValue(Math.round(transformX / this.props.width))
            }
            else{
                transformX = 400;
                this.props.updateValue(Math.round(transformX / this.props.width))
                transformX -= CHILD_WIDTH;
            }
        }
        console.log(transformX)
        this.props.updateX(e.clientX);
        this.setState({transformX});
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.currentX === nextState.transformX){
            return false;
        }
        return true;
    }

    componentDidUpdate() {
        this.setState({transformX: this.props.currentX})
    }

    componentWillUnmount() {
        document.body.style.userSelect = 'auto';
        window.removeEventListener('mousemove', this.mouseMoveHandler);
        window.removeEventListener('mouseup', this.mouseUpHandler);
    }

    render() {
        return (
            React.Children.only(React.cloneElement(
                this.props.children,
                {
                    onMouseDown: this.mouseDownHandler,
                    style: {
                        transform : `translate(${this.state.transformX}px)`
                    }
                }
              ))
        )
    }
}