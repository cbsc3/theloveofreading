 import { Flex, Text, Button } from "@radix-ui/themes";

 function Navbar(props){
    return (
        <div>

        <Flex direction="column" gap="2">
			<Text>Hello from Radix Themes :)</Text>
			<Button>Let's go</Button>
		</Flex>

        </div>
    )
}

export default Navbar; 