import { useState } from 'react';
import ImageUploadSection from './img';

interface FormData {
    propertyType: string;
    region: string;
    district: string;
    title: string;
    description: string;
    price: string;
    allowsPets: string;
    isFurnished: string;
    furniture: string[];
    minimumRentPeriod: string;
}

interface Option {
    value: string;
    label: string;
}

const Add = () => {
    const [formData, setFormData] = useState<FormData>({
        propertyType: '',
        region: '',
        district: '',
        title: '',
        description: '',
        price: '',
        allowsPets: '',
        isFurnished: '',
        furniture: [],
        minimumRentPeriod: ''
    });


    const propertyTypes: Option[] = [
        { value: 'apartment', label: 'Квартира' },
        { value: 'house', label: 'Дом' },
        { value: 'land', label: 'Участок' }
    ];

    const regions: Option[] = [
        { value: 'tashkent', label: 'Ташкент' },
        { value: 'andijan', label: 'Андижанская область' },
        { value: 'bukhara', label: 'Бухарская область' },
        { value: 'fergana', label: 'Ферганская область' },
        { value: 'jizzakh', label: 'Джизакская область' },
        { value: 'kashkadarya', label: 'Кашкадарьинская область' },
        { value: 'khorezm', label: 'Хорезмская область' },
        { value: 'namangan', label: 'Наманганская область' },
        { value: 'navoi', label: 'Навоийская область' },
        { value: 'samarkand', label: 'Самаркандская область' },
        { value: 'sirdarya', label: 'Сырдарьинская область' },
        { value: 'surkhandarya', label: 'Сурхандарьинская область' },
        { value: 'tashkent-region', label: 'Ташкентская область' },
        { value: 'karakalpakstan', label: 'Каракалпакстан' }
    ];

    const districts: Record<string, Option[]> = {
        tashkent: [
            { value: 'chilanzar', label: 'Чиланзар' },
            { value: 'yunusabad', label: 'Юнусабад' },
            { value: 'shaykhantakhur', label: 'Шайхантахур' },
            { value: 'mirobod', label: 'Мирободский' },
            { value: 'mirzo-ulugbek', label: 'Мирзо-Улугбек' },
            { value: 'yashnabad', label: 'Яшнабад' },
            { value: 'almazar', label: 'Алмазар' },
            { value: 'bektemir', label: 'Бектемир' },
            { value: 'uchtepa', label: 'Учтепа' },
            { value: 'yakkasaray', label: 'Яккасарай' },
            { value: 'sergeli', label: 'Сергели' }
        ],
        andijan: [
            { value: 'andijan-city', label: 'г. Андижан' },
            { value: 'asaka', label: 'Асака' },
            { value: 'balikchi', label: 'Балыкчи' },
            { value: 'boz', label: 'Боз' },
            { value: 'bulakbashi', label: 'Булакбаши' }
        ],
        bukhara: [
            { value: 'bukhara-city', label: 'г. Бухара' },
            { value: 'alat', label: 'Алат' },
            { value: 'gijduvan', label: 'Гиждуван' },
            { value: 'jondor', label: 'Жондор' },
            { value: 'kagan', label: 'Каган' }
        ],
        fergana: [
            { value: 'fergana-city', label: 'г. Фергана' },
            { value: 'besharik', label: 'Бешарик' },
            { value: 'danga', label: 'Данга' },
            { value: 'furkat', label: 'Фуркат' },
            { value: 'kuva', label: 'Кува' }
        ]
    };

    const furnitureOptions: Option[] = [
        { value: 'sofa', label: 'Диван' },
        { value: 'bed', label: 'Кровать' },
        { value: 'wardrobe', label: 'Шкаф' },
        { value: 'table', label: 'Стол' },
        { value: 'chairs', label: 'Стулья' },
        { value: 'refrigerator', label: 'Холодильник' },
        { value: 'washing-machine', label: 'Стиральная машина' },
        { value: 'tv', label: 'Телевизор' },
        { value: 'air-conditioner', label: 'Кондиционер' },
        { value: 'microwave', label: 'Микроволновка' }
    ];

    const rentPeriods: Option[] = [
        { value: '1-month', label: '1 месяц' },
        { value: '3-months', label: '3 месяца' },
        { value: '6-months', label: '6 месяцев' },
        { value: '12-months', label: '12 месяцев' }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
            ...(name === 'region' && { district: '' }),
            ...(name === 'isFurnished' && value === 'no' && { furniture: [] })
        }));
    };

    const handleFurnitureChange = (furnitureValue: string): void => {
        setFormData(prev => ({
            ...prev,
            furniture: prev.furniture.includes(furnitureValue)
                ? prev.furniture.filter((item: string) => item !== furnitureValue)
                : [...prev.furniture, furnitureValue]
        }));
    };

    const handleSubmit = (): void => {
        console.log('Form Data:', formData);
        alert('Объявление добавлено!');
    };


    const inputClasses: string = "w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent hover:border-gray-400 transition-all duration-200 shadow-sm";
    const selectClasses: string = "w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent hover:border-gray-400 transition-all duration-200 shadow-sm";
    const labelClasses: string = "block text-sm font-medium text-gray-700 mb-2";
    const buttonClasses: string = "w-full bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 active:bg-gray-900 transition-all duration-200 shadow-lg hover:shadow-xl font-medium";

    return (
        <div className="shadow-lg my-5 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-2xl shadow-gray-900/50 ring-1 ring-gray-200">
            <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Добавить объявление</h1>

            <div className="space-y-6">
                {/* Property Type */}
                <div>
                    <label className={labelClasses}>
                        Тип недвижимости *
                    </label>
                    <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        required
                        className={selectClasses}
                    >
                        <option value="">Выберите тип</option>
                        {propertyTypes.map((type: Option) => (
                            <option key={type.value} value={type.value}>
                                {type.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Region */}
                <div>
                    <label className={labelClasses}>
                        Регион *
                    </label>
                    <select
                        name="region"
                        value={formData.region}
                        onChange={handleInputChange}
                        required
                        className={selectClasses}
                    >
                        <option value="">Выберите регион</option>
                        {regions.map((region: Option) => (
                            <option key={region.value} value={region.value}>
                                {region.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* District */}
                {formData.region && districts[formData.region] && (
                    <div>
                        <label className={labelClasses}>
                            Район *
                        </label>
                        <select
                            name="district"
                            value={formData.district}
                            onChange={handleInputChange}
                            required
                            className={selectClasses}
                        >
                            <option value="">Выберите район</option>
                            {districts[formData.region].map((district: Option) => (
                                <option key={district.value} value={district.value}>
                                    {district.label}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Title */}
                <div>
                    <label className={labelClasses}>
                        Название *
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        placeholder="Введите название объявления"
                        className={inputClasses}
                    />
                </div>

                {/* Description */}
                <div>
                    <label className={labelClasses}>
                        Описание *
                    </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        placeholder="Введите описание"
                        rows={4}
                        className={inputClasses}
                    />
                </div>

                {/* Price */}
                <div>
                    <label className={labelClasses}>
                        Цена (сум) *
                    </label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        required
                        placeholder="Введите цену"
                        min="0"
                        className={inputClasses}
                    />
                </div>

                {/* Allows Pets */}
                <div>
                    <label className={labelClasses}>
                        Разрешены домашние животные *
                    </label>
                    <select
                        name="allowsPets"
                        value={formData.allowsPets}
                        onChange={handleInputChange}
                        required
                        className={selectClasses}
                    >
                        <option value="">Выберите</option>
                        <option value="yes">Да</option>
                        <option value="no">Нет</option>
                    </select>
                </div>

                {/* Is Furnished */}
                <div>
                    <label className={labelClasses}>
                        Мебелирована *
                    </label>
                    <select
                        name="isFurnished"
                        value={formData.isFurnished}
                        onChange={handleInputChange}
                        required
                        className={selectClasses}
                    >
                        <option value="">Выберите</option>
                        <option value="yes">Да</option>
                        <option value="no">Нет</option>
                    </select>
                </div>

                {/* Furniture Options */}
                {formData.isFurnished === 'yes' && (
                    <div>
                        <label className={labelClasses}>
                            Мебель *
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            {furnitureOptions.map((furniture: Option) => (
                                <label key={furniture.value} className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={formData.furniture.includes(furniture.value)}
                                        onChange={() => handleFurnitureChange(furniture.value)}
                                        className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500 focus:ring-2"
                                    />
                                    <span className="text-gray-700 text-sm">{furniture.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                )}

              <ImageUploadSection />

                {/* Minimum Rent Period */}
                <div>
                    <label className={labelClasses}>
                        Минимальный срок аренды *
                    </label>
                    <select
                        name="minimumRentPeriod"
                        value={formData.minimumRentPeriod}
                        onChange={handleInputChange}
                        required
                        className={selectClasses}
                    >
                        <option value="">Выберите срок</option>
                        {rentPeriods.map((period: Option) => (
                            <option key={period.value} value={period.value}>
                                {period.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Submit Button */}
                <button
                    type="button"
                    onClick={handleSubmit}
                    className={buttonClasses}
                >
                    Добавить объявление
                </button>
            </div>
        </div>
    );
};

export default Add;