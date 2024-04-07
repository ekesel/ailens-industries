import React, { Fragment, useState, useEffect } from 'react';
import styles from '../styles/filter.module.css';
import ImageTile from './ImageTile';
import CardSet from './CardSet';


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

  useEffect(() => {
    if (selectedCategory == 'All') {
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

  const [isMobileView, setIsMobileView] = useState(false)

  // check mobile view
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    if (mediaQuery.matches) {
      setIsMobileView(true)
    }
    else
      setIsMobileView(false)
  }, [])

  return (
    <Fragment>
      <div className={styles.container}>
        <ul className={styles.centerContainer}>
          {categories.map(function (object, i) {
            return <li key={i} onClick={(e) => {
              e.preventDefault();
              setSelectedCategory(object)
            }} className={selectedCategory == object ? `${styles.activeCell}` : ''}><a>{object}</a></li>;
          })}
        </ul>
      </div>
      {selectedCatObjs.map(function (object, i) {
        return <CardSet data={object} position={isMobileView ? 'right' : object?.mediaCardPosition} productLink={object?.productLink} />
      })}
    </Fragment>
  )
}

export default Categories