import React, { useState } from 'react';
import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/react';

const Proveedor: React.FC = () => {
  const [nombre, setNombre] = useState<string>('');
  const [apellido, setApellido] = useState<string>('');
  const [edad, setEdad] = useState<number | string>('');
  const [correo, setCorreo] = useState<string>('');

  // Funciones para manejar las operaciones
  const handleAgregar = () => {
    console.log('Proveedor agregado:', { nombre, apellido, edad, correo });
    // Aquí se puede agregar lógica para enviar estos datos a una API o base de datos
  };

  const handleModificar = () => {
    console.log('Proveedor modificado:', { nombre, apellido, edad, correo });
    // Aquí se puede agregar lógica para modificar los datos de un proveedor existente
  };

  const handleEliminar = () => {
    console.log('Proveedor eliminado:', { nombre, apellido, edad, correo });
    // Aquí se puede agregar lógica para eliminar un proveedor
  };

  const handleConsultar = () => {
    console.log('Consultar proveedor con los siguientes datos:', { nombre, apellido, edad, correo });
    // Aquí se puede agregar lógica para consultar los datos de un proveedor
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Gestión de Proveedores</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel position="floating">Nombre</IonLabel>
          <IonInput
            value={nombre}
            onIonChange={(e) => setNombre(e.detail.value!)}
            required
          />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Apellido</IonLabel>
          <IonInput
            value={apellido}
            onIonChange={(e) => setApellido(e.detail.value!)}
            required
          />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Edad</IonLabel>
          <IonInput
            type="number"
            value={edad}
            onIonChange={(e) => setEdad(e.detail.value!)}
            required
          />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Correo Electrónico</IonLabel>
          <IonInput
            value={correo}
            onIonChange={(e) => setCorreo(e.detail.value!)}
            type="email"
            required
          />
        </IonItem>

        <IonButton expand="full" onClick={handleAgregar}>Agregar</IonButton>
        <IonButton expand="full" onClick={handleModificar}>Modificar</IonButton>
        <IonButton expand="full" onClick={handleEliminar}>Eliminar</IonButton>
        <IonButton expand="full" onClick={handleConsultar}>Consultar</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Proveedor;
