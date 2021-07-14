# Official React Tutorial

## Components, props, elements, state

A *Component* is a small, independent piece of code.
    Ex:

    class Square extends React.Component {
        render() {
            return (
                <button className="square" onClick={() => alert('click')}>
                {this.props.value}
                </button>
            );
        }
    }

*Props* are properties components can share.
*Elements* are lightweight descriptions of what to render.
*State* is a way to remember data. To declare it, we use a constructor and a setStatename.

setState *re-renders* the component whenever we call it.