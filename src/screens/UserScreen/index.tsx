import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { Button } from "../../components/Button";
import { User } from "../../interfaces/User";

import { View, UserView, FormContainer, FormItem, FormInput, Text, BoldText, ErrorText } from "./styles";


export const UserScreen: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [initialValues, setInitialValues] = useState({ name: '', birthday: '', email: '', phone: '' });


    useEffect(() => {
        const loadUser = async () => {
            const savedUser = await AsyncStorage.getItem('user');
            setUser(savedUser ? JSON.parse(savedUser) : null);
        };
        loadUser();
    }, []);

    const handleSubmit = async (values: User) => {
        setUser(values);
        setShowForm(false);
        await AsyncStorage.setItem('user', JSON.stringify(values));
    };

    const handleClear = async () => {
        await AsyncStorage.removeItem('user');
        setUser(null);
        setShowForm(false);
    };

    const handleEdit = () => {
        if (user) {
            setInitialValues(user);
        }
        setUser(null);
        setShowForm(true);
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Apelido').min(3, 'Minímo 3 caracteres!').max(20, 'Máximo 20 caracteres!'),
        birthday: Yup.date().required('Aniverdsário obrigatório!').typeError('Data inválida!'),
        email: Yup.string().required('Email obrigatório!').min(6, 'Minímo 6 digitos!').email('E-mail inválido!'),
        phone: Yup.string().required('Telefone obrigatório!').min(10, 'Minímo 10 digitos!').max(11, 'Máximo 11 digitos!')
    });

    return (
        <UserView>
            {user ? (
                <View>
                    <Text>Apelido: {user.name}</Text>
                    <Text>Aniversário: {user.birthday}</Text>
                    <Text>Email: {user.email}</Text>
                    <Text>Telefone: {user.phone}</Text>
                    <Button onPress={handleEdit} title="Editar perfil" />
                    <Button onPress={handleClear} title="Limpar dados" />
                </View>
            ) : (
                <>
                    {!showForm && <Button onPress={() => setShowForm(true)} title="Criar um novo perfil de usuário" />}
                    {showForm && (
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                                <FormContainer>
                                    <FormItem>
                                        <BoldText>Apelido: </BoldText>
                                        <FormInput
                                            placeholder="Equipe Rocket"
                                            onChangeText={handleChange('name')}
                                            onBlur={handleBlur('name')}
                                            value={values.name}
                                        />
                                    </FormItem>
                                    {errors.name && touched.name && <ErrorText>{errors.name}</ErrorText>}
                                    <FormItem>
                                        <BoldText>Aniversário: </BoldText>
                                        <FormInput
                                            placeholder="dd/mm/yyyy"
                                            onChangeText={handleChange('birthday')}
                                            onBlur={handleBlur('birthday')}
                                            value={values.birthday}
                                        />
                                    </FormItem>
                                    {errors.birthday && touched.birthday && <ErrorText>{errors.birthday}</ErrorText>}
                                    <FormItem>
                                        <BoldText>Email: </BoldText>
                                        <FormInput
                                            placeholder="exemplo@exemplo.com"
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            value={values.email}
                                        />
                                    </FormItem>
                                    {errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>}
                                    <FormItem>
                                        <BoldText>Telefone: </BoldText>
                                        <FormInput
                                            placeholder="31987654321"
                                            onChangeText={handleChange('phone')}
                                            onBlur={handleBlur('phone')}
                                            value={values.phone}
                                        />
                                    </FormItem>
                                    {errors.phone && touched.phone && <ErrorText>{errors.phone}</ErrorText>}
                                    <Button onPress={handleSubmit} title="Salvar" />
                                </FormContainer>
                            )}
                        </Formik>
                    )}
                </>
            )}
        </UserView>
    );
};