import React, { useState } from "react";

import { Formik } from 'formik';
import * as Yup from 'yup';

import { Button } from "../../components/Button";
import { User } from "../../interfaces/User";

import { UserView, FormContainer, FormItem, FormInput, Text, BoldText, ErrorText } from "./styles";


export const UserScreen: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = (values: User) => {
        setUser(values);
        setShowForm(false);
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Apelido').min(6, 'Minímo 3 caracteres!').max(20, 'Máximo 20 caracteres!'),
        birthday: Yup.date().required('Aniverdsário obrigatório!').typeError('Data inválida!'),
        email: Yup.string().required('Email obrigatório!').min(6, 'Minímo 6 digitos!').email('E-mail inválido!'),
        phone: Yup.string().required('Telefone obrigatório!').min(10, 'Minímo 10 digitos!').max(11, 'Máximo 11 digitos!')
    });

    return (
        <UserView>
            {!user && <Button onPress={() => setShowForm(true)} title="Criar um novo perfil de usuário" />}

            {showForm && (
                <Formik
                    initialValues={{ name: '', birthday: '', email: '', phone: '' }}
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
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.phone}
                                />
                            </FormItem>
                            {errors.phone && touched.phone && <ErrorText>{errors.phone}</ErrorText>}
                            <Button onPress={handleSubmit} title="Salvar" />
                        </FormContainer>
                    )}
                </Formik>
            )}
        </UserView>
    );
};