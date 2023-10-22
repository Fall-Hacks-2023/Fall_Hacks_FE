import React, { useState } from 'react';
import { axiosInstance } from "../index";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Select,
    Stack,
    Text,
    useColorMode,
} from '@chakra-ui/react';

const HabitForm = () => {

    const [formData, setFormData] = useState({
        title: '',
        interval: {
        type: 'days',
        number: 1,
        },
        achievementDate: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleIntervalChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        interval: { ...formData.interval, [name]: value },
        });
    };

    const handleSubmit = async () => {
        console.log(formData);
        await axiosInstance
        .post(`/habit`, formData)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
        
        window.location.href = '/';
    };

    const selectStyle = {
        color: 'white',
        backgroundColor: 'gray.700',
    };

    return (
        <Box p={4} borderWidth="1px" borderRadius="md" color="white">
        <Text fontSize="xl" mb={4}>
            Create a New Habit
        </Text>
        <Stack spacing={3}>
            <FormControl border={'none'}>
            <FormLabel>Title</FormLabel>
            <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
            />
            </FormControl>
            <FormLabel>Remind me every...</FormLabel>
            <Flex justify="space-between" gap={3}>
            <FormControl flex="1">
                <Input
                type="number"
                name="number"
                value={formData.interval.number}
                onChange={handleIntervalChange}
                />
            </FormControl>
            <FormControl flex="2">
                <Select
                name="type"
                value={formData.interval.type}
                onChange={handleIntervalChange}
                >
                <option style={{ color: 'black    ' }} value="minutes">
                    Minute(s)
                </option>
                <option style={{ color: 'black' }} value="days">
                    Day(s)
                </option>
                <option style={{ color: 'black' }} value="weeks">
                    Week(s)
                </option>
                <option style={{ color: 'black' }} value="months">
                    Month(s)
                </option>
                </Select>
            </FormControl>
            </Flex>
            <FormControl>
            <FormLabel>Achievement Date</FormLabel>
            <Input
                type="date"
                name="achievementDate"
                value={formData.achievementDate}
                onChange={handleInputChange}
            />
            </FormControl>
            <Button colorScheme="blue" onClick={handleSubmit}>
            Create Habit
            </Button>
        </Stack>
        </Box>
    );
};

export default HabitForm;