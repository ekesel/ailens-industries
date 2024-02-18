import React, { Fragment, useState, useEffect } from 'react';
import styles from '../styles/filter.module.css';
import ImageTile from './ImageTile';


const Filter = (props) => {
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

  return (
    <Fragment>
      <div className={styles.container}>
        <ul className={styles.centerContainer}>
          {categories.map(function (object, i) {
            return <li key={i} onClick={(e)=> {
              e.preventDefault();
              setSelectedCategory(object)
            }} className={selectedCategory == object ? `${styles.activeCell}` : ''}><a>{object}</a></li>;
          })}
        </ul>
      </div>
      <div className={styles.tileCenterContainer} id="products">
        <div className={styles.tileContainer}>
          {selectedCatObjs.map(function (object, i) {
            return <div className={styles.tile}>
            <ImageTile data={object} number={i+1} color={i%2 ? 'yellow' : 'blue'} />
          </div>
          })}
        </div>
      </div>
    </Fragment>
  )
}

export default Filter