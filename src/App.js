import React, {Component} from "react";
import  {Posts} from "./component/Posts";


class Add extends Component {


    state = {
        posts: [
            {id: 'abc1', name: 'JS Basics'}, 
            {id: 'abc2', name: 'JS Advanced'},
            {id: 'abc3', name: 'JS React'}
            
        ]
            
    };


    render() {
        return (
        
            <div className="App">
                {/*<h2>{this.state.posts[0].name}</h2>
                <h2>{this.state.posts[1].name}</h2>
                <h2>{this.state.posts[2].name}</h2>*/}
                
                {
                    /*this.state.posts.map(
                        post => (
                            <h2 key={post.id}>{post.name}</h2>
                        )
                        // (post, index) => (
                        //   <h2 key={index}>{post.name}</h2>
                        //)
                    )*/
                }

                <Posts posts={this.state.posts}/>

            </div>
            
        );
    }

}

export default Add;

const countStyle = {
    margin: '0 2rem',
    display: 'inline-block'
}