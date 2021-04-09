import React, { Component, useEffect } from 'react';
import './Categories.css';
import DigitalPhotography from './DigitalPhotography';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import image5 from '../Component/Assets/image/image5.png';
import image6 from '../Component/Assets/image/image6.png';
import image2 from '../Component/Assets/image/image2.png';
import image3 from '../Component/Assets/image/image3.png';
import image4 from '../Component/Assets/image/image4.png';
import Card1 from '../Component/Student/comp/Card1';
import CarousalCard from '../Component/Student/comp/carousalCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoriesAction } from '../Store/actions/courseActions';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
    marginTop: -5,
    width: 100,
    //   backgroundColor:'#3583C5'
    color: 'black',
  },
}));
export default function Categories() {
  //fetching categories
  const dispatch = useDispatch();

  const { loading, error, categories } = useSelector(
    (state) => state.course.getAllCategories
  );

  // const updatedCategories = categories.map((cat) => {
  //   return { name: cat.name.replaceAll('_', ' '), count: cat.count };
  // });

  console.log(categories);

  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, []);
  //state
  const [search, setSearch] = React.useState('All');
  const classes = useStyles();
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className='categorySec'>
      <div className='container  mb-0'>
        <div className='uk-visible@s'>
          <div className='d-flex'>
            <h3 className='categoryHead'>Categories</h3>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize='small' />}
              aria-label='breadcrumb'
            >
              <Link color='inherit' href='/'>
                Photography
              </Link>
              {/* <Typography color="textPrimary"></Typography> */}
            </Breadcrumbs>
          </div>
        </div>
        {/* mobile */}
        <div className='uk-hidden@s'>
          <div className='uk-flex uk-flex-between mobileSelect'>
            <h3 className='categoryHead'>Categories</h3>
            <FormControl variant='outlined' className={classes.formControl}>
              <InputLabel id='demo-simple-select-outlined-label'></InputLabel>
              <Select
                labelId='demo-simple-select-outlined-label'
                id='demo-simple-select-outlined'
                value={search}
                onChange={handleSearch}
                label=''
              >
                <MenuItem value='All'>All</MenuItem>
                <MenuItem value={1}>Digital Photography</MenuItem>
                <MenuItem value={2}>Wildlife Photography</MenuItem>
                <MenuItem value={3}>Illustration</MenuItem>
                <MenuItem value={4}>Graphic Design</MenuItem>
                <MenuItem value={5}>UI UX Design</MenuItem>
                <MenuItem value={6}>Motion Graphics</MenuItem>
                <MenuItem value={7}>Web Development </MenuItem>
                <MenuItem value={8}>Product Design</MenuItem>
                <MenuItem value={9}>Graphic Design</MenuItem>
                <MenuItem value={10}>UI UX Design</MenuItem>
                <MenuItem value={11}>Motion Graphics</MenuItem>
                <MenuItem value={12}>Web Development</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize='small' />}
            aria-label='breadcrumb'
          >
            <Link color='inherit' href='/'>
              Photography
            </Link>

            <Typography color='textPrimary'>Digital Photography</Typography>
          </Breadcrumbs>
        </div>
        <div style={{ marginLeft: '40px', marginRight: '25px' }}>
          <hr></hr>
        </div>
      </div>

      <div className='container  uk-grid uk-visible@s'>
        <div className='uk-width-1-4 catSwitcher'>
          <div>
            <div class='uk-width-auto'>
              <ul class='uk-tab-left' uk-tab='connect: #my-id'>
                {categories.map((cat) => (
                  <li>
                    <a
                      href='#'
                      style={{
                        justifyContent: 'space-between',
                        display: 'flex',
                      }}
                    >
                      {cat.name} <span className='numb'>{cat.count}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr></hr>
        </div>

        <div className='uk-width-3-4'>
          <div class='uk-width-expand'>
            <ul id='my-id' class='uk-switcher'>
              {/* <li>
                                <ul id="secondSwitch" class="uk-switcher">
                                    <li>
                                        <DigitalPhotography></DigitalPhotography>

                                    </li>
                                    <li><h1>hii</h1></li>
                                </ul>
                            </li> */}
              <li>
                <DigitalPhotography></DigitalPhotography>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='uk-hidden@s uk-padding'>
        <div
          class='uk-position-relative uk-visible-toggle uk-light'
          tabindex='-1'
          uk-slider='true'
        >
          <ul class='uk-slider-items uk-child-width-1-1'>
            <li>
              <Link to='/digital-marketing'>
                <CarousalCard name={'Course 01'} img={image5}></CarousalCard>
              </Link>
            </li>

            <li>
              <Link to='/digital-marketing'>
                <CarousalCard name={'Course 01'} img={image4}></CarousalCard>
              </Link>
            </li>
            <li>
              <Link to='/digital-marketing'>
                <CarousalCard name={'Course 01'} img={image3}></CarousalCard>
              </Link>
            </li>
            <li>
              <Link to='/digital-marketing'>
                <CarousalCard name={'Course 01'} img={image2}></CarousalCard>
              </Link>
            </li>
          </ul>

          <a
            class='uk-position-center-left uk-position-small uk-hidden-hover'
            href='#'
            uk-slidenav-previous='true'
            uk-slider-item='previous'
          ></a>
          <a
            class='uk-position-center-right uk-position-small uk-hidden-hover'
            href='#'
            uk-slidenav-next='true'
            uk-slider-item='next'
          ></a>
        </div>
      </div>
    </div>
  );
}
