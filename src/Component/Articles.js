const Articles = ({data}) => 
{
    return(
        <div className='row article border' style={{marginTop:'20px'}}>
            <div className='col-4'>
                <img src={data.urlToImage}  style={{height:'193px'}} className='img-thumbnail' />
            </div>
            
            <div className='col-8 content'>
                <h3>{data.title}</h3>
                <h6>{data.author}</h6>
                <h6>{data.publishedAt.substr(0,10)}</h6>
                <div><a href={data.url} class="btn btn-primary btn-sm" role="button" aria-disabled="true">Read Article</a></div>
            </div>
        </div>
    )
}

export default Articles;