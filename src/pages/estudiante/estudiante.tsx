import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonList } from '@ionic/react';

const EstudiantePage: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [correo, setCorreo] = useState('');
  const [estudiantes, setEstudiantes] = useState<{ nombre: string, apellido: string, edad: string, correo: string }[]>([]);

  const agregarEstudiante = () => {
    if (nombre && apellido && edad && correo) {
      setEstudiantes([...estudiantes, { nombre, apellido, edad, correo }]);
      limpiarCampos();
    } else {
      alert('Todos los campos son obligatorios.');
    }
  };

  const modificarEstudiante = (index: number) => {
    const estudiante = estudiantes[index];
    setNombre(estudiante.nombre);
    setApellido(estudiante.apellido);
    setEdad(estudiante.edad);
    setCorreo(estudiante.correo);
    eliminarEstudiante(index); // Se elimina antes de agregar la versión modificada
  };

  const eliminarEstudiante = (index: number) => {
    const nuevaLista = estudiantes.filter((_, i) => i !== index);
    setEstudiantes(nuevaLista);
  };

  const limpiarCampos = () => {
    setNombre('');
    setApellido('');
    setEdad('');
    setCorreo('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gestión de Estudiantes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel position="floating">Nombre</IonLabel>
            <IonInput value={nombre} onIonChange={(e) => setNombre(e.detail.value!)} />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Apellido</IonLabel>
            <IonInput value={apellido} onIonChange={(e) => setApellido(e.detail.value!)} />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Edad</IonLabel>
            <IonInput type="number" value={edad} onIonChange={(e) => setEdad(e.detail.value!)} />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Correo Electrónico</IonLabel>
            <IonInput type="email" value={correo} onIonChange={(e) => setCorreo(e.detail.value!)} />
          </IonItem>
        </IonList>

        <IonButton expand="full" color="primary" onClick={agregarEstudiante}>Agregar</IonButton>
        <IonButton expand="full" color="warning" onClick={limpiarCampos}>Limpiar</IonButton>

        <IonList>
          {estudiantes.map((estudiante, index) => (
            <IonItem key={index}>
              <IonLabel>{`${estudiante.nombre} ${estudiante.apellido} - ${estudiante.edad} años - ${estudiante.correo}`}</IonLabel>
              <IonButton color="success" onClick={() => modificarEstudiante(index)}>Modificar</IonButton>
              <IonButton color="danger" onClick={() => eliminarEstudiante(index)}>Eliminar</IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default EstudiantePage;
