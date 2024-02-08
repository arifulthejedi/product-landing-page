
export default function Page(props){



    return<>
    <div className="page">
        <div className="page-heading">
            Home
        </div>
        <div className="categories">
            <a href="#">Cleaning,</a>
            <a href="#"> Smart Home device,</a>
            <a href="#"> Bedroom, </a>
             or
            <a href="#"> See all home</a>
        </div>
        <div className="posts-container">
             <div className="front-post">
               <img width="100%" src="https://cdn.thewirecutter.com/wp-content/media/2023/10/ode-to-threshold-sheets-2048px-3x2-1.jpg?auto=webp&quality=60&crop=3:2&width=514&dpr=1.5" />
               <h4>
                  <a href="#">Our Pick for Budget Cotton Sheets Since 2016, These Durable Target Sheets Feel More Expensive Than They Are</a>
               </h4>
               <div className="time"><span>Published</span>  OCTOBER 2, 2023</div>
               <p className="post-auth">by Alexander Aciman</p>
               <div>
                  These aren’t the high-end sheets you might find at a resort, but our testers found their quality comparable to that of sets costing three times more.
               </div>
             </div>
             <div className="posts">
               <div className="post">
                 <img width="100%" src="https://cdn.thewirecutter.com/wp-content/media/2022/02/springmattresses-2048px-0324-2x3-1.jpg?auto=webp&quality=60&crop=3:2&width=141&dpr=1.5" />
                 <div className="post-content">
                    <h4>
                        <a href="#">
                          The Best Innerspring Mattresses
                        </a>
                    </h4>
                    <div className="time"><span>Published</span>  OCTOBER 2, 2023</div>
                    <p className="post-auth">by by Joanne Chen</p>
                 </div>
                </div>
                <div className="post">
                 <img width="100%" src="https://cdn.thewirecutter.com/wp-content/uploads/2019/05/cotton-sheets-2019-lowres-9993.jpg?auto=webp&quality=60&crop=3:2&width=141&dpr=1.5" />
                 <div className="post-content">
                    <h4>
                        <a href="#">
                        The Best Cotton Sheets
                        </a>
                    </h4>
                    <div className="time"><span>Published</span>  OCTOBER 2, 2023</div>
                    <p className="post-auth">by by Joanne Chen</p>
                 </div>
                </div> 
                <div className="post">
                 <img width="100%" src="https://cdn.thewirecutter.com/wp-content/media/2022/02/springmattresses-2048px-0324-2x3-1.jpg?auto=webp&quality=60&crop=3:2&width=141&dpr=1.5" />
                 <div className="post-content">
                    <h4>
                        <a href="#">
                          The Best Innerspring Mattresses
                        </a>
                    </h4>
                    <div className="time"><span>Published</span>  OCTOBER 2, 2023</div>
                    <p className="post-auth">by by Joanne Chen</p>
                 </div>
                </div> 
             </div>
        </div>
    </div>
    </>
}