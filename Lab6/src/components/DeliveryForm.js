import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  route: yup.string().required('Маршрут є обовʼязковим'),
  deliveryType: yup.string().required('Вид відправлення є обовʼязковим'),
  places: yup.array().of(
    yup.object().shape({
      count: yup.number().required('Кількість є обовʼязковою').positive('Кількість повинна бути позитивним числом'),
      packing: yup.string().required('Пакування є обовʼязковим'),
      additionalServices: yup.string(),
    })
  ),
});

function DeliveryForm() {
  const [placesCount, setPlacesCount] = useState(2); // Кількість місць

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handlePlacesCountChange = (event) => {
    setPlacesCount(parseInt(event.target.value));
  };

  const renderPlaces = () => {
    const places = [];

    for (let i = 0; i < placesCount; i++) {
      places.push(
        <div key={i}>
          <h3>Місце {i + 1}</h3>
          <div>
            <label>Кількість:</label>
            <input type="number" name={`places[${i}].count`} {...register(`places[${i}].count`)} />
            {errors?.places?.[i]?.count && <p>{errors.places[i].count.message}</p>}
          </div>
          <div>
            <label>Пакування:</label>
            <input type="text" name={`places[${i}].packing`} {...register(`places[${i}].packing`)} />
            {errors?.places?.[i]?.packing && <p>{errors.places[i].packing.message}</p>}
          </div>
          <div>
            <label>Додаткові послуги:</label>
            <input type="text" name={`places[${i}].additionalServices`} {...register(`places[${i}].additionalServices`)} />
          </div>
        </div>
      );
    }

    return places;
  };

  const handleReset = () => {
    reset();
    setPlacesCount(2);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Маршрут відправлення:</label>
          <select name="route" {...register('route')}>
            <option value="">Виберіть маршрут</option>
            <option value="Житомир">Житомир</option>
            <option value="Київ">Київ</option>
            <option value="Івано-Франківськ">Івано-Франківськ</option>
            <option value="Львів">Львів</option>
            <option value="Херсон">Херсон</option>
          </select>
          {errors.route && <p>{errors.route.message}</p>}
        </div>
        <div>
          <label>Вид відправлення:</label>
          <select name="deliveryType" {...register('deliveryType')}>
            <option value="">Виберіть вид відправлення</option>
            <option value="Палети">Палети</option>
            <option value="Вантажі">Вантажі</option>
          </select>
          {errors.deliveryType && <p>{errors.deliveryType.message}</p>}
        </div>
        <div>
          <label>Кількість місць:</label>
          <select name="placesCount" value={placesCount} onChange={handlePlacesCountChange}>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        {renderPlaces()}
        <button type="submit">Реалізувати</button>
        <button type="button" onClick={handleReset}>
          Очистити
        </button>
      </form>
    </div>
  );
}

export default DeliveryForm;
