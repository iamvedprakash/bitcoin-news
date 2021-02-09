import Articles from './Articles'

const ArticleList = ({data}) => {
    return(
        <div className="container-sm" style={{marginTop:'30px'}}>
                {data.map((data) => ( 
                    <Articles  data={data} /> 
                ))}
        </div>
    )
}

export default ArticleList;