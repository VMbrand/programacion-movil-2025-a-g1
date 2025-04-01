import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonLabel, IonItem, IonList, IonAlert } from '@ionic/react';

const ProfesorPage: React.FC = () => {
  // Definir estado para los campos de entrada
  const [nombre, setNombre] = useState<string>('');
  const [apellido, setApellido] = useState<string>('');
  const [edad, setEdad] = useState<number | string>('');
  const [email, setEmail] = useState<string>('');

  const [alertMessage, setAlertMessage] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);

  // Funciones para manejar los eventos de los botones
  const handleAdd = () => {
    if (nombre && apellido && edad && email) {
      setAlertMessage('Profesor agregado exitosamente.');
      setShowAlert(true);
      // Aquí puedes agregar lógica para agregar un profesor a tu base de datos
    } else {
      setAlertMessage('Por favor, completa todos los campos.');
      setShowAlert(true);
    }
  };

  const handleModify = () => {
    if (nombre && apellido && edad && email) {
      setAlertMessage('Profesor modificado exitosamente.');
      setShowAlert(true);
      // Aquí puedes agregar lógica para modificar un profesor en tu base de datos
    } else {
      setAlertMessage('Por favor, completa todos los campos.');
      setShowAlert(true);
    }
  };

  const handleDelete = () => {
    setAlertMessage('Profesor eliminado exitosamente.');
    setShowAlert(true);
    // Aquí puedes agregar lógica para eliminar un profesor de tu base de datos
  };

  const handleConsult = () => {
    setAlertMessage('Consulta realizada exitosamente.');
    setShowAlert(true);
    // Aquí puedes agregar lógica para consultar un profesor en tu base de datos
  };

  return (
    <IonPage>
      <IonContent>
        <IonList>
          {/* Nombre */}
          <IonItem>
            <IonLabel position="floating">Nombre</IonLabel>
            <IonInput
              value={nombre}
              onIonChange={(e) => setNombre(e.detail.value!)}
              required
            />
          </IonItem>

          {/* Apellido */}
          <IonItem>
            <IonLabel position="floating">Apellido</IonLabel>
            <IonInput
              value={apellido}
              onIonChange={(e) => setApellido(e.detail.value!)}
              required
            />
          </IonItem>

          {/* Edad */}
          <IonItem>
            <IonLabel position="floating">Edad</IonLabel>
            <IonInput
              type="number"
              value={edad}
              onIonChange={(e) => setEdad(e.detail.value!)}
              required
            />
          </IonItem>

          {/* Correo electrónico */}
          <IonItem>
            <IonLabel position="floating">Correo electrónico</IonLabel>
            <IonInput
              type="email"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
              required
            />
          </IonItem>
        </IonList>

        {/* Botones */}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <IonButton expand="block" onClick={handleAdd}>Agregar</IonButton>
          <IonButton expand="block" onClick={handleModify}>Modificar</IonButton>
          <IonButton expand="block" onClick={handleDelete}>Eliminar</IonButton>
          <IonButton expand="block" onClick={handleConsult}>Consultar</IonButton>
        </div>

        {/* Alerta de acción */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Acción Realizada'}
          message={alertMessage}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default ProfesorPage;
