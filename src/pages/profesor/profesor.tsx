// src/pages/ProfesorPage.tsx
import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonLabel, IonItem, IonList, IonText } from '@ionic/react';
import { useProfesores } from '../providers/ProfesoresProvider';

const ProfesorPage: React.FC = () => {
  const { profesores, agregarProfesor, modificarProfesor, eliminarProfesor, consultarProfesor } = useProfesores();

  // Estado para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState<number | string>('');
  const [correo, setCorreo] = useState('');

  // Funciones de los botones
  const handleAgregar = () => {
    if (nombre && apellido && edad && correo) {
      const nuevoProfesor = { nombre, apellido, edad: Number(edad), correo };
      agregarProfesor(nuevoProfesor);
      limpiarCampos();
    } else {
      alert('Por favor complete todos los campos.');
    }
  };

  const handleModificar = (index: number) => {
    if (nombre && apellido && edad && correo) {
      const profesorModificado = { nombre, apellido, edad: Number(edad), correo };
      modificarProfesor(index, profesorModificado);
      limpiarCampos();
    } else {
      alert('Por favor complete todos los campos.');
    }
  };

  const handleEliminar = (index: number) => {
    eliminarProfesor(index);
  };

  const handleConsultar = (index: number) => {
    const profesor = consultarProfesor(index);
    if (profesor) {
      setNombre(profesor.nombre);
      setApellido(profesor.apellido);
      setEdad(profesor.edad.toString());
      setCorreo(profesor.correo);
    }
  };

  const limpiarCampos = () => {
    setNombre('');
    setApellido('');
    setEdad('');
    setCorreo('');
  };

  return (
    <IonPage>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Nombre</IonLabel>
            <IonInput
              value={nombre}
              onIonChange={(e) => setNombre(e.detail.value!)}
              placeholder="Escribe el nombre"
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Apellido</IonLabel>
            <IonInput
              value={apellido}
              onIonChange={(e) => setApellido(e.detail.value!)}
              placeholder="Escribe el apellido"
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Edad</IonLabel>
            <IonInput
              type="number"
              value={edad}
              onIonChange={(e) => setEdad(e.detail.value!)}
              placeholder="Escribe la edad"
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Correo Electrónico</IonLabel>
            <IonInput
              type="email"
              value={correo}
              onIonChange={(e) => setCorreo(e.detail.value!)}
              placeholder="Escribe el correo electrónico"
            />
          </IonItem>
        </IonList>

        <IonButton expand="full" onClick={handleAgregar}>Agregar</IonButton>
        <IonButton expand="full" onClick={() => handleModificar(profesores.findIndex(profesor => profesor.correo === correo))}>
          Modificar
        </IonButton>
        <IonButton expand="full" onClick={() => handleEliminar(profesores.findIndex(profesor => profesor.correo === correo))}>
          Eliminar
        </IonButton>
        <IonButton expand="full" onClick={() => handleConsultar(profesores.findIndex(profesor => profesor.correo === correo))}>
          Consultar
        </IonButton>

        <IonList>
          <h2>Profesores Registrados</h2>
          {profesores.length === 0 ? (
            <IonText color="danger">No hay profesores registrados.</IonText>
          ) : (
            profesores.map((profesor, index) => (
              <IonItem key={index}>
                <IonLabel>
                  <h3>{profesor.nombre} {profesor.apellido}</h3>
                  <p>Edad: {profesor.edad}</p>
                  <p>Email: {profesor.correo}</p>
                </IonLabel>
                <IonButton fill="clear" onClick={() => handleConsultar(index)}>Ver</IonButton>
              </IonItem>
            ))
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ProfesorPage;
