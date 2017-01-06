function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
           // let className = this.constructor.name;
            return`Post: ${this.title}\nContent: ${this.content})`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes,  dislikes ){
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
            // let comment = {title:this.title, content:this.content, likes:this.likes, dislikes: this.dislikes};
            // addComment(comment);
        }


        addComment(comment) {
            this.comments.push(comment)
        }

        toString() {
            //let baseStr = super.toString();
            let output = super.toString() + `\nRating: ${this.likes} - ${this.dislikes}\n`;
            if(this.comments.length > 0) {
                output += 'Comments:\n';
                for (let i = 0; i < this.comments.length; i++) {
                    output += `* ${this.comments[i]}\n`;
                }
            }

            return output;
        }
    }

    class BlogPost extends Post {
        constructor(title, content,  views ){
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
           // let baseStr = super.toString();
            return super.toString() + `\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

let post = new Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());
















































































