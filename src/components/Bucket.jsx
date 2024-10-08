import { useState } from 'react';
import BucketForm from './BucketForm';

function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  console.log(props.bucket);

  const submitUpdate = (value) => {

    // TODO: Write logic to call the editBucketItem prop with the supplied values

    // TODO: Set the key:value pairs in the `edit` object back to empty strings
    props.editBucketItem(edit.id, value);
    setEdit({ id: null, value: '', eagerness: '' });

  };

  // If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.bucket.map((item, index) => (
    <div 
      className={
        item.isComplete
        ? `bucket-row complete ${item.eagerness}`
        : `bucket-row ${item.eagerness}`
      } 
      key={index}
    >

      {/* TODO: Add an onClick event that invokes the `completeBucketItem` method passing the item id as a argument */}
      <div key={item.id} onClick={() => props.completeBucketItem(item.id)}>
          {item.text}
      </div>
      <div className="icons">
        {/* TODO: Add an onClick event update the `edit` object with the `id`, `value`, and `eagerness` properties */}
        <p onClick={() => setEdit({ id: item.id, value: item.text, eagerness: item.eagerness })}> ✏️</p>
        {/* TODO: Add an onClick event that will invoke the removeBucketItem method passing in the `item.id` */}
        <p onClick={() => props.removeBucketItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;
