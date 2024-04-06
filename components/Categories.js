import React, { Fragment, useState, useEffect } from 'react';
import styles from '../styles/categories.module.css';
import ImageTile from './ImageTile';


const Categories = (props) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCatObjs, setSelectedCatObjs] = useState([])

  useEffect(() => {
    let catList = ['All'];
    props?.categories.map(function (object, i) {
      if (!catList.includes(object.category)) {
        catList.push(object.category)
      }
    })
    setCategories(catList)
  }, [])

  useEffect(()=> {
    if(selectedCategory == 'All')
    {
      setSelectedCatObjs(props?.categories)
    }
    else {
      let catList = [];
      props?.categories.map(function (object, i) {
        if (object.category == selectedCategory) {
          catList.push(object)
        }
      })
      setSelectedCatObjs(catList)
    }
  }, [selectedCategory])
  
  const redirectPage = (link) => {
    window.location.href = link
  }

  return (
    <Fragment>
      <div className={styles.container}>
      </div>
      <div className={styles.tileCenterContainer} id="products">
        <div className={styles.tileContainer}>
          {selectedCatObjs.map(function (object, i) {
            return <div className={styles.tile} onClick={(e)=>{
              e.preventDefault();
              redirectPage(object?.link)
          }}>
            <ImageTile data={object} number={i+1} color={'yellow'} />
          </div>
          })}
        </div>
      </div>
    </Fragment>
  )
}

export default Categories