import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, CardMedia, ButtonGroup, Button, Typography } from '@material-ui/core';
import { getApiNews } from "../../actions/apiNewsAction";
import './apiNews.css';

const ApiNews = () => {
    const apiNews = useSelector((state) => state.apiNewsReducer);
    const dispatch = useDispatch();
    
    const getNewsHandler = (theme) => {
        dispatch(getApiNews(theme));
    };
    
    return (
        <div className="categoryNews">
            <h2>Новостная лента</h2>
            <ButtonGroup size="small" aria-label="small button group">
                {apiNews.theme.map(el => (
                    <Button onClick={() => getNewsHandler(el)} key={el}> { el } </Button>
                ))}
            </ButtonGroup>

            <div className="cardItem">
                {apiNews.news.map(el => (
                    <Card sx={{ maxWidth: 345 }} key={el.content}>
                        <CardMedia component="img"  height="140" image={el.imageUrl} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {el.author}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {el.content}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
};

export default ApiNews;
