import React, { ChangeEvent, FormEvent, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Reservation } from "../types/interfaces";

const ReservationForm = () => {
  const [reservation, setReservation] = useState<Reservation>({
    name: "",
    phone: 0,
    numberOfPeople: 1,
    smoking: false,
    dateTime: "",
    specialRequests: "",
  });

  const handleInput = (fieldName: string, value: number) => {
    setReservation({
      ...reservation,
      [fieldName]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(reservation);
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/reservation",
        {
          method: "POST",
          body: JSON.stringify(reservation),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (response.ok) {
        alert("OK!");
        setReservation({
          name: "",
          phone: 0,
          numberOfPeople: 1,
          smoking: false,
          dateTime: "",
          specialRequests: "",
        });
      } else {
        alert("ERROR");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Book your table NOW!</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Your name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Input your name"
            value={reservation.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleInput("name", parseInt(e.currentTarget.value));
            }}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Your phone</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Input your cellphone"
            value={reservation.phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleInput("phone", parseInt(e.currentTarget.value));
            }}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>How many people?</Form.Label>
          <Form.Control
            as="select"
            value={reservation.numberOfPeople}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleInput("numberOfPeople", parseInt(e.currentTarget.value));
            }}
            required
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Do you smoke?"
            checked={reservation.smoking}
            onChange={(e: any) => {
              handleInput("smoking", e.target.checked);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date?</Form.Label>
          <Form.Control
            type="datetime-local"
            value={reservation.dateTime}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleInput("dateTime", parseInt(e.currentTarget.value));
            }}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Any special request?</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={reservation.specialRequests}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleInput("specialRequests", parseInt(e.currentTarget.value));
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ReservationForm;
