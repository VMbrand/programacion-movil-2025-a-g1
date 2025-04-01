import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonLabel, IonItem, IonList, IonText } from '@ionic/react';

const ClientePage: React.FC = () => {
  
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState<number | string>('');
  const [email, setEmail] = useState('');
  const [clientes, setClientes] = useState<Array<{ nombre: string; apellido: string; edad: number; email: string }>>([]);

  const handleAgregar = () => {
    if (nombre && apellido && edad && email) {
      const nuevoCliente = { nombre, apellido, edad: Number(edad), email };
      setClientes([...clientes, nuevoCliente]);
      limpiarCampos();
    } else {
      alert('Por favor complete todos los campos.');
    }
  };

  const handleModificar = (index: number) => {
    if (nombre && apellido && edad && email) {
      const clientesModificados = [...clientes];
      clientesModificados[index] = { nombre, apellido, edad: Number(edad), email };
      setClientes(clientesModificados);
      limpiarCampos();
    } else {
      alert('Por favor complete todos los campos.');
    }
  };

  const handleEliminar = (index: number) => {
    const clientesRestantes = clientes.filter((_, i) => i !== index);
    setClientes(clientesRestantes);
  };

  const handleConsultar = (index: number) => {
    const cliente = clientes[index];
    if (cliente) {
      setNombre(cliente.nombre);
      setApellido(cliente.apellido);
      setEdad(cliente.edad.toString());
      setEmail(cliente.email);
    }
  };

  const limpiarCampos = () => {
    setNombre('');
    setApellido('');
    setEdad('');
    setEmail('');
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
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
              placeholder="Escribe el correo electrónico"
            />
          </IonItem>
        </IonList>

        <IonButton expand="full" onClick={handleAgregar}>Agregar</IonButton>
        <IonButton expand="full" onClick={() => handleModificar(clientes.findIndex(cliente => cliente.email === email))}>
          Modificar
        </IonButton>
        <IonButton expand="full" onClick={() => handleEliminar(clientes.findIndex(cliente => cliente.email === email))}>
          Eliminar
        </IonButton>
        <IonButton expand="full" onClick={() => handleConsultar(clientes.findIndex(cliente => cliente.email === email))}>
          Consultar
        </IonButton>

        <IonList>
          <h2>Clientes Registrados</h2>
          {clientes.length === 0 ? (
            <IonText color="danger">No hay clientes registrados.</IonText>
          ) : (
            clientes.map((cliente, index) => (
              <IonItem key={index}>
                <IonLabel>
                  <h3>{cliente.nombre} {cliente.apellido}</h3>
                  <p>Edad: {cliente.edad}</p>
                  <p>Email: {cliente.email}</p>
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

export default ClientePage;
