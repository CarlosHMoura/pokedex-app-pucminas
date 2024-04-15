import React, { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Formik } from "formik";
import * as Yup from "yup";

import { Button } from "../../components/Button";
import { User } from "../../interfaces/User";

import {
    UserScreenView,
    UserContainer,
    UserItem,
    UserInput,
    Text,
    BoldText,
    ErrorText,
} from "./styles";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required("Apelido")
        .min(3, "Minímo 3 caracteres!")
        .max(20, "Máximo 20 caracteres!"),
    birthday: Yup.date()
        .required("Aniversário obrigatório!")
        .typeError("Data inválida!"),
    email: Yup.string()
        .required("Email obrigatório!")
        .min(6, "Minímo 6 digitos!")
        .email("E-mail inválido!"),
    phone: Yup.string()
        .required("Telefone obrigatório!")
        .min(10, "Minímo 10 digitos!")
        .max(11, "Máximo 11 digitos!"),
});

export const UserScreen: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [initialValues, setInitialValues] = useState<User>({
        name: "",
        birthday: "",
        email: "",
        phone: "",
        favorites: [],
    });

    useEffect(() => {
        const loadUser = async () => {
            const savedUser = await AsyncStorage.getItem("user");
            setUser(savedUser ? JSON.parse(savedUser) : null);
        };
        loadUser();
    }, []);

    const handleSubmit = useCallback(async (values: User) => {
        setUser(values);
        setShowForm(false);
        await AsyncStorage.setItem("user", JSON.stringify(values));
    }, []);

    const handleDelete = useCallback(async () => {
        await AsyncStorage.removeItem("user");
        setUser(null);
        setShowForm(false);
    }, []);

    const handleUpdate = useCallback(() => {
        if (user) {
            setInitialValues(user);
        }
        setUser(null);
        setShowForm(true);
    }, [user]);

    return (
        <UserScreenView>
            {user ? (
                <UserContainer>
                    <UserItem>
                        <BoldText>Apelido: </BoldText>
                        <Text>{user.name}</Text>
                    </UserItem>
                    <UserItem>
                        <BoldText>Aniversário: </BoldText>
                        <Text>
                            {user.birthday.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3")}
                        </Text>
                    </UserItem>
                    <UserItem>
                        <BoldText>Email: </BoldText>
                        <Text>{user.email}</Text>
                    </UserItem>
                    <UserItem>
                        <BoldText>Telefone: </BoldText>
                        <Text>
                            {user.phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")}
                        </Text>
                    </UserItem>
                    <UserItem>
                        <BoldText>Favoritos: </BoldText>
                        <Text>{user.favorites.join(" • ")}</Text>
                    </UserItem>
                    <UserItem>
                        <Button onPress={handleUpdate} title="Editar perfil" />
                        <Button onPress={handleDelete} title="Limpar dados" />
                    </UserItem>
                </UserContainer>
            ) : (
                <>
                    {!showForm && (
                        <Button
                            onPress={() => setShowForm(true)}
                            title="Criar um novo perfil de usuário"
                        />
                    )}
                    {showForm && (
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                values,
                                errors,
                                touched,
                            }) => (
                                <UserContainer>
                                    <UserItem>
                                        <BoldText>Apelido: </BoldText>
                                        <UserInput
                                            placeholder="Equipe Rocket"
                                            onChangeText={handleChange("name")}
                                            onBlur={handleBlur("name")}
                                            value={values.name}
                                        />
                                    </UserItem>
                                    {errors.name && touched.name && (
                                        <ErrorText>{errors.name}</ErrorText>
                                    )}
                                    <UserItem>
                                        <BoldText>Aniversário: </BoldText>
                                        <UserInput
                                            placeholder="dd/mm/yyyy"
                                            onChangeText={handleChange("birthday")}
                                            onBlur={handleBlur("birthday")}
                                            value={values.birthday}
                                        />
                                    </UserItem>
                                    {errors.birthday && touched.birthday && (
                                        <ErrorText>{errors.birthday}</ErrorText>
                                    )}
                                    <UserItem>
                                        <BoldText>Email: </BoldText>
                                        <UserInput
                                            placeholder="exemplo@exemplo.com"
                                            onChangeText={handleChange("email")}
                                            onBlur={handleBlur("email")}
                                            value={values.email}
                                        />
                                    </UserItem>
                                    {errors.email && touched.email && (
                                        <ErrorText>{errors.email}</ErrorText>
                                    )}
                                    <UserItem>
                                        <BoldText>Telefone: </BoldText>
                                        <UserInput
                                            placeholder="31987654321"
                                            onChangeText={handleChange("phone")}
                                            onBlur={handleBlur("phone")}
                                            value={values.phone}
                                        />
                                    </UserItem>
                                    {errors.phone && touched.phone && (
                                        <ErrorText>{errors.phone}</ErrorText>
                                    )}
                                    <Button onPress={handleSubmit} title="Salvar" />
                                </UserContainer>
                            )}
                        </Formik>
                    )}
                </>
            )}
        </UserScreenView>
    );
};
